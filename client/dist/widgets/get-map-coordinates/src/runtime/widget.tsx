import { React, AllWidgetProps, css, classNames, jsx } from 'jimu-core';
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis';
import * as projection from "esri/geometry/projection";
import * as SpatialReference from 'esri/geometry/SpatialReference';
import * as Graphic from 'esri/Graphic'
import axios from 'axios';
import FormGroup from '@material-ui/core/FormGroup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
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
  ymax: Number,
  jimuMapView: JimuMapView
}

const useStyles = makeStyles(() =>
  createStyles({
    searchBtn: {
      position: 'absolute',
      bottom: 0,
      right: 0
    }
  })
);

export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
  extentWatch: __esri.WatchHandle;

  state: State = {
    extent: null,
    search: function(){},
    xmin: null,
    xmax: null,
    ymin: null,
    ymax: null,
    jimuMapView: null
  };

  getStyle () {
    return css`
    .test {
      size: small;
      margin-bottom: 0px !important;
      color: red;
    };
    .searchBtn {
      position: absolute;
      bottom: 0;
      right: 0;
    };
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
    if (jimuMapView) {
      this.setState({
        jimuMapView: jimuMapView
      });
    }
  }

  search = (jimuMapView: JimuMapView) => {
    const baseUrl = globalThis.STEWSUrl;
    const email = globalThis.userEmail;
    const token = globalThis.accessToken;
    const polygon = this.state.xmin+"%20"+this.state.ymin+","+this.state.xmax+"%20"+this.state.ymin+","
                  +this.state.xmax+"%20"+this.state.ymax+","+this.state.xmin+"%20"+this.state.ymax+","
                  +this.state.xmin+"%20"+this.state.ymin;
    const requestURL = decodeURI(baseUrl + "/products?&geom=POLYGON%28%28" + polygon + "%29%29&geoms=true&files=true");
    console.log(requestURL);
    const config = {
      headers: { 
        Authorization: 'Bearer ' + token,
        accept: 'application/json'
      }
    };
    axios.get(encodeURI(requestURL), config)
      //Successful:
      .then((response) => {
        console.log(this.state);
        function insertAfter(referenceNode, newNode) {
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
        var pcPoly = [];
        var meshPoly = [];
        var graphicScope = null;
        for(var i = 0; i < response.data.pointclouds.length; i++){
          var item = response.data.pointclouds[i];
          var geomSplit = response.data.pointclouds[i].geom.split(",");
          console.log(geomSplit);
          for(var y=0; y<geomSplit.length; y++){
            var ring;
            if(y==0){
              var r = geomSplit[y].substring(10);
              ring = r.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              pcPoly[y] = ring;
            } else if (y == geomSplit.length-1) {
              ring = geomSplit[y].replace(" ", "");
              ring = ring.replaceAll(")", "");
              ring = ring.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              pcPoly[y] = ring;
            } else {
              ring = geomSplit[y].replace(" ", "");
              ring = ring.replace("(", "");
              ring = ring.replace(")", "");
              ring = ring.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              pcPoly[y] = ring;
            }
          };
          const lineSymbol = {
            type: "simple-line", // autocasts as new SimpleLineSymbol()
            color: [226, 119, 40], // RGB color values as an array
            width: 4
          };
          const lineAtt = {
            Name: item.name, 
            access_tag: item.access_tag, 
            cesium_viewer: item.cesium_viewer,
            classification: item.classification,
            collected_at: item.collected_at,
            datatype: item.datatype,
            filesize: item.filesize,
            program: item.program,
            streaming_url: item.streaming_url,
            sensor: item.sensor,
            srs: item.srs[0],
            density: item.density
          };
          console.log(pcPoly);
          const polygon = {
            type: "polygon",
            rings: pcPoly
          };
          const graphic = new Graphic({
            geometry: polygon,
            symbol: lineSymbol,
            attributes: lineAtt
          });
          console.log(graphic);
          this.state.jimuMapView.view.graphics.add(graphic);
          var el = document.createElement("span");
          el.innerHTML = item.name;
          var div = document.getElementById("checkbox-list-label-Point Clouds");
          insertAfter(div, el);
        }
        for(var i = 0; i < response.data.modsims.length; i++){
          var el = document.createElement("span");
          el.innerHTML = response.data.modsims[i].name;
          var div = document.getElementById("checkbox-list-label-FG3D Data");
          insertAfter(div, el);
        }
        for(var i = 0; i < response.data.meshes.length; i++){
          var item = response.data.meshes[i];
          var geomSplit = response.data.meshes[i].geom.split(",");
          for(var y=0; y<geomSplit.length; y++){
            var ring;
            if(y==0){
              var r = geomSplit[y].substring(10);
              ring = r.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              meshPoly[y] = ring;
            } else if (y == geomSplit.length-1) {
              ring = geomSplit[y].replace(" ", "");
              ring = ring.replaceAll(")", "");
              ring = ring.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              meshPoly[y] = ring;
            } else {
              ring = geomSplit[y].replace(" ", "");
              ring = ring.replace("(", "");
              ring = ring.replace(")", "");
              ring = ring.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              meshPoly[y] = ring;
            }
          };
          const lineSymbol = {
            type: "simple-line", // autocasts as new SimpleLineSymbol()
            color: [22, 119, 200], // RGB color values as an array
            width: 4
          };
          const lineAtt = {
            Name: item.name, 
            access_tag: item.access_tag, 
            cesium_viewer: item.cesium_viewer,
            classification: item.classification,
            collected_at: item.collected_at,
            datatype: item.datatype,
            filesize: item.filesize,
            program: item.program,
            streaming_url: item.streaming_url,
            sensor: item.sensor,
            //srs: item.srs[0],
            density: item.density
          };
          const polygon = {
            type: "polygon",
            rings: meshPoly
          };
          const graphic = new Graphic({
            geometry: polygon,
            symbol: lineSymbol,
            attributes: lineAtt
          });
          console.log(graphic);
          this.state.jimuMapView.view.graphics.add(graphic);
          var el = document.createElement("span");
          el.innerHTML = response.data.meshes[i].name;
          var div = document.getElementById("checkbox-list-label-Meshes");
          insertAfter(div, el);
          graphicScope = graphic;
        }
        for(var i = 0; i < response.data.vectors.length; i++){
          var el = document.createElement("span");
          el.innerHTML = response.data.vectors[i].name;
          var div = document.getElementById("checkbox-list-label-Vectors");
          insertAfter(div, el);
        }
        for(var i = 0; i < response.data.rasters.length; i++){
          var el = document.createElement("span");
          el.innerHTML = response.data.rasters[i].name;
          var div = document.getElementById("checkbox-list-label-Elevation Models");
          insertAfter(div, el);
        }
        console.log(jimuMapView.view.zoom);
        jimuMapView.view.zoom = 15;
      }, 
      //Error:
      (error) => {
        console.log(error);
      });
  }

  searchBtn = () => {
    const classes = useStyles();
    return(
        <Button
            className={classes.searchBtn}
            variant="contained"
            size="large"
            color="primary"
            //className={classes.loginBtn}
            onClick={this.search}
            //disabled={state.isButtonDisabled}
            >
            Search in Map
        </Button>
    )
  }

  render() {
    if (!this.isConfigured()) {
      return 'Select a map';
    }
    return (
      <div className="widget-starter jimu-widget">
        {this.props.hasOwnProperty("useMapWidgetIds") &&
         this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds[0] && (
           <JimuMapViewComponent
             useMapWidgetId={this.props.useMapWidgetIds?.[0]}
             onActiveViewChange={this.onActiveViewChange}
           />
         )
        }

        
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
        <this.searchBtn />
      </div>
    );
  }
}

