import { React, AllWidgetProps, css, classNames, jsx } from 'jimu-core';
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';
import * as projection from "esri/geometry/projection";
import * as SpatialReference from 'esri/geometry/SpatialReference';
import axios from 'axios';
import FormGroup from '@material-ui/core/FormGroup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import fortawesome from '@fortawesome/fontawesome-free/';
import Button from '@material-ui/core/Button';

interface State {
  extent: __esri.Extent,
  search: Function,
  xmin: Number,
  xmax: Number,
  ymin: Number,
  ymax: Number
}

export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
  extentWatch: __esri.WatchHandle;

  state: State = {
    extent: null,
    search: function(){},
    xmin: null,
    xmax: null,
    ymin: null,
    ymax: null
  };

  getStyle () {
    return css`
    .test {
      size: small;
      margin-bottom: 0px !important;
      color: red;
    }
    `
  }

  isConfigured = () => {
    return this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 1;
  }

  componentWillUnmount() {
    if (this.extentWatch) {
      this.extentWatch.remove();
      this.extentWatch = null;
    }
  }

  onActiveViewChange = (jimuMapView: JimuMapView) => {
    if (!this.extentWatch) {
      var outSR = new SpatialReference({
        wkid: 4326
      });
      this.extentWatch = jimuMapView.view.watch('extent', extent => {
        extent = projection.project(extent, outSR);
        this.setState({
          extent: extent,
          xmin: extent.xmin,
          xmax: extent.xmax,
          ymin: extent.ymin,
          ymax: extent.ymax
        })
      });
    }
  }

  search= () => {
    const baseUrl = globalThis.STEWSUrl;
    const email = globalThis.userEmail;
    const token = globalThis.accessToken;
    const polygon = this.state.xmin+" "+this.state.ymin+","+this.state.xmax+" "+this.state.ymin+","
                  +this.state.xmax+" "+this.state.ymax+","+this.state.xmin+" "+this.state.ymax+","
                  +this.state.xmin+" "+this.state.ymin;
    const requestURL = baseUrl + "/admin/api/products?email=" + email + "&geom=POLYGON%28%28"
      + polygon + "%29%29&geoms=false&files=false";
    console.log(requestURL);
    const config = {
      headers: { 
        Authorization: 'Bearer ' + token,
        accept: 'application/json',
        "Access-Control-Allow-Origin": '*'
      }
    };
    axios.get(encodeURI(requestURL), config)
      //Successful:
      .then((response) => {
        console.log(response);
      }, 
      //Error:
      (error) => {
        console.log(error);
      });
  }
  render() {
    if (!this.isConfigured()) {
      return 'Select a map';
    }
    return (
      <div className="widget-starter jimu-widget">
        {this.props.hasOwnProperty("useMapWidgetIds") && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
          <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.onActiveViewChange} />
        )}
        
        <FormGroup className={classNames('test')}>
          <List>
            {["Point Clouds", "Elevation Models", "Imagery", "Vectors", "Meshes", "FG3D Data"].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  key={value}
                >
                  {/* <IconButton aria-label="Example">
                    <fortawesome.FontAwesomeIcon icon={fortawesome.faEllipsisV} />
                  </IconButton> */}
                  <ListItemText id={labelId} primary={`${value}`} />
                </ListItem>
              );
            })}
          </List>
{/*           <FormControlLabel className={classNames('test')} control={<Checkbox/>} label="Point Clouds" />
          <FormControlLabel className={classNames('test')} control={<Checkbox/>} label="Elevation Models" />
          <FormControlLabel className={classNames('test')} control={<Checkbox/>} label="Imagery" />
          <FormControlLabel className={classNames('test')} control={<Checkbox/>} label="Vectors" />
          <FormControlLabel className={classNames('test')} control={<Checkbox/>} label="Meshes" />
          <FormControlLabel className={classNames('test')} control={<Checkbox/>} label="FG3D Data" /> */}
        </FormGroup>
          <p></p>
        <Button
            variant="contained"
            size="large"
            color="primary"
            //className={classes.loginBtn}
            onClick={this.search}
            //disabled={state.isButtonDisabled}
            >
            Search in Map
        </Button>
      </div>
    );
  }
}

