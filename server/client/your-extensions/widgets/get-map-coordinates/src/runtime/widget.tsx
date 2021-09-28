/** @jsx jsx */
import { AllWidgetProps, css, jsx, classNames } from "jimu-core";
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from "jimu-arcgis";
import * as Point from "esri/geometry/Point";
import * as esri from "esri/geometry";
import * as projection from "esri/geometry/projection";
//import { project } from "esri/rest/geometryService";
//import * as ProjectParameters from "esri/tasks/support/ProjectParameters";
import * as React from 'react';
import axios from 'axios';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

//import Search from './components/Search';



export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
  state = {
    jimuMapView: null,
    latitude: "",
    longitude: "",
    xMIN: "",
    xMAX: "",
    yMIN: "",
    yMAX: "",
    search: function(){},
    apiLoaded: false,
    Point: null,
    projection: null,
    esri: null
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

  componentDidMount () {
    if (!this.state.apiLoaded) {
      loadArcGISJSAPIModules([
        'esri/geometry/Point',
        'esri/geometry/projection',
        'esri/geometry'
      ]).then(modules => {
        ;[
          this.state.Point,
          this.state.projection,
          this.state.esri
        ] = modules
        this.setState({
          apiLoaded: true
        })
      })
    }
  }

/*   const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      MuiFormGroup: {
        size: "small",
        color: "primary",
      }
    })
  );

  const classes = useStyles(); */

  activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      this.setState({
        jimuMapView: jmv
      });

      jmv.view.watch("extent", evt => {
        //console.log(evt)
        //const upperRight: Point = this.state.jimuMapView.view.toMap({
          //x: evt.extent.xmax,
          //y: evt.extent.ymax
        //});
        //const lowerLeft: Point = this.state.jimuMapView.view.toMap({
          //x: evt.extent.xmin,
          //y: evt.extent.ymin
        //});
        let xmax = evt.extent.xmax;
        let ymax = evt.extent.ymax;
        //});
        //const lowerLeft: Point = this.state.jimuMapView.view.toMap({
        let xmin = evt.extent.xmin;
        let ymin = evt.extent.ymin;
        let crs = evt.spatialReference.wkid;
        //let SRtype = 'pcs';

        let inSR = new this.state.esri.SpatialReference({
          wkid: crs
        });
        var outSR = new this.state.esri.SpatialReference({
          wkid: 4326
        });
        let inPoint = new this.state.Point({x: xmax, y: ymax, spatialReference: inSR});
        let inPoint2 = new this.state.Point({x: xmin, y: ymin, spatialReference: inSR});
        //var geometryService = new project.project("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");
        //const geomSer = new geometryService();
        let projectedPoints = this.state.projection.project([inPoint, inPoint2], outSR);
        ymax = projectedPoints[0].latitude.toFixed(3)
        xmax = projectedPoints[0].longitude.toFixed(3)
        ymin = projectedPoints[1].latitude.toFixed(3)
        xmin = projectedPoints[1].longitude.toFixed(3)
        //let params = new ProjectParameters({
          //geometries: [inPoint, inPoint2],
          //outSpatialReference: outSR,
          //transformation: transformation
        //});
        //let jsonInput = params.toJSON()

        //project("https://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer/project", params).then(

        //);

        this.setState({
          xMIN: xmin,
          yMIN: ymin,
          xMAX: xmax,
          yMAX: ymax
        });

      });
      
      jmv.view.on("pointer-move", (evt) => {
        const point = this.state.jimuMapView.view.toMap({
          x: evt.x,
          y: evt.y
        });
        this.setState({
          latitude: point.latitude.toFixed(3),
          longitude: point.longitude.toFixed(3)
        });
      });
    }
  };
search() {
  const baseUrl = globalThis.STEWSUrl;
  const email = globalThis.email;
  const token = globalThis.accessToken;
  console.log();
  const requestURL = baseUrl + "/admin/api/products?email="+email+"&geom=POLYGON%28%28"
    +this.state.xMIN+this.state.xMAX+this.state.yMIN+this.state.yMAX+"%29%29&geoms=false&files=false";
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
      console.log(response);
    }, (error) => {
      console.log(error);
    });
}
  render() {
    return (
      <div css={this.getStyle()} className="widget-starter jimu-widget">
        {this.props.hasOwnProperty("useMapWidgetIds") && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
          <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.activeViewChangeHandler} />
        )}
        <Button
            variant="contained"
            size="large"
            color="primary"
            //className={classes.loginBtn}
            onClick={this.search}
            //disabled={state.isButtonDisabled}
            >
            Search in Map
        </Button>        <p>
          Lat/Lon: {this.state.latitude} {this.state.longitude}
          <br></br>
          xMin: {this.state.xMIN}
          <br></br>
          yMin: {this.state.yMIN}
          <br></br>
          xMax: {this.state.xMAX}
          <br></br>
          yMax: {this.state.yMAX}
          <br></br>
          

        </p>
        <FormGroup className={classNames('test')}>
          {/* <FormControlLabel control={<Checkbox/>} label="Point Clouds" />
          <FormControlLabel control={<Checkbox/>} label="Elevation Models" />
          <FormControlLabel control={<Checkbox/>} label="Imagery" />
          <FormControlLabel control={<Checkbox/>} label="Vectors" />
          <FormControlLabel control={<Checkbox/>} label="Meshes" />
          <FormControlLabel control={<Checkbox/>} label="FG3D Data" /> */}
        </FormGroup>
      </div>
    );
  }
}

