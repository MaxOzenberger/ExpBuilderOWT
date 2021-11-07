import { React, AllWidgetProps, css, classNames, jsx, appActions } from 'jimu-core';
import { JimuMapViewComponent, JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis';
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import * as projection from "esri/geometry/projection";
import * as SpatialReference from 'esri/geometry/SpatialReference';
import * as Graphic from 'esri/Graphic';
import * as FeatureLayer from 'esri/layers/FeatureLayer';
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
import Tooltip from '@material-ui/core/Tooltip';

interface State {
  extent: __esri.Extent,
  search: Function,
  xmin: Number,
  xmax: Number,
  ymin: Number,
  ymax: Number,
  jimuMapView: JimuMapView,
  isButtonDisabled: Boolean
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
    jimuMapView: null,
    isButtonDisabled: true
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
        console.log(jimuMapView.view.zoom);
        if(jimuMapView.view.zoom >= 15){
          this.setState({isButtonDisabled: false})
        } else {
          this.setState({isButtonDisabled: true})
        }
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
    this.state.jimuMapView.view.popup = {
      dockEnabled: true,
      dockOptions: {
        buttonEnabled: true,
        breakpoint: false
      }
    }
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

        this.state.jimuMapView.view.graphics.removeAll();

        function insertAfter(referenceNode, newNode) {
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
        var pcPoly = []; var pcGfx = [];
        var meshPoly = []; var meshGfx = [];
        var msPoly = []; var msGfx = [];
        var vecPoly = []; var vecGfx = [];
        var rasPoly = []; var rasGfx = [];
        for(var i = 0; i < response.data.pointclouds.length; i++){
          pcPoly = [];
          var fullEnv = [];
          var item = response.data.pointclouds[i];
          var geomSplit = response.data.pointclouds[i].geom.split(",");
          for(var y=0; y<geomSplit.length; y++){
            var ring;
            var envelope;
            if(y==0){
              var r = geomSplit[y].substring(10);
              ring = r.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              pcPoly[y] = ring;
            } else if (geomSplit[y].startsWith(' (')) {
              var yInit = y;
              for(var x = 0; x < geomSplit.length - yInit; x++){
                envelope = geomSplit[y].replace(" ", "");
                envelope = envelope.replace("(", "");
                envelope = envelope.replaceAll(")", "");
                envelope = envelope.split(" ");
                envelope[0] = parseFloat(envelope[0]);
                envelope[1] = parseFloat(envelope[1]);
                fullEnv[x] = envelope;
                y++;
              }
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
          /* const lineSymbol = {
            type: "simple-fill",  // autocasts as new SimpleFillSymbol()
            color: [ 226, 119, 40, 0.3 ],
            style: "solid",
            outline: {  // autocasts as new SimpleLineSymbol()
              color: "white",
              width: 1
            }             
          }; */
          var viewUrl = "";
          if(item.streaming_url != null){
            var viewUrlarr = item.streaming_url.split("/");
            viewUrl = "https://grid.nga.mil/grid/mesh/viewer/" + viewUrlarr[viewUrlarr.length - 2] + "/";
          }
          const lineAtt = {
            ObjectID: y,
            Name: item.name, 
            Type: "Pointcloud",
            access_tag: item.access_tag, 
            cesium_viewer: item.cesium_viewer,
            classification: item.classification,
            collected_at: item.collected_at,
            datatype: item.datatype,
            filesize: item.filesize,
            program: item.program,
            streaming_url: viewUrl,
            sensor: item.sensor,
            //srs: item.srs[0],
            density: item.density,
            Convert_Data_Type:	"https://stews-api.dodterrain.org/admin/",
            Generate_STE_3D_Terrain_pack:	"https://stews-api.dodterrain.org/admin/",
            Clip_and_ship:	"https://stews-api.dodterrain.org/admin/",
            Upload_raw:	"https://stews-api.dodterrain.org/admin/"
          };
          const polygon = {
            type: "polygon",
            rings: [pcPoly, fullEnv]
          };
          const graphic = new Graphic({
            geometry: polygon,
            attributes: lineAtt
          });
          //this.state.jimuMapView.view.graphics.add(graphic);
          pcGfx[i] = graphic;
          var el = document.createElement("span");
          el.innerHTML = item.name;
          var div = document.getElementById("checkbox-list-label-Point Clouds");
          //insertAfter(div, el);
        }

        for(var i = 0; i < response.data.modsims.length; i++){
          msPoly = [];
          var fullEnv = [];
          var item = response.data.modsims[i];
          var geomSplit = response.data.modsims[i].geom.split(",");
          for(var y=0; y<geomSplit.length; y++){
            var ring;
            var envelope;
            if(y==0){
              var r = geomSplit[y].substring(10);
              ring = r.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              msPoly[y] = ring;
            } else if (geomSplit[y].startsWith(' (')) {
              var yInit = y;
              for(var x = 0; x < geomSplit.length - yInit; x++){
                envelope = geomSplit[y].replace(" ", "");
                envelope = envelope.replace("(", "");
                envelope = envelope.replaceAll(")", "");
                envelope = envelope.split(" ");
                envelope[0] = parseFloat(envelope[0]);
                envelope[1] = parseFloat(envelope[1]);
                fullEnv[x] = envelope;
                y++;
              }
            } else if (y == geomSplit.length-1) {
              ring = geomSplit[y].replace(" ", "");
              ring = ring.replaceAll(")", "");
              ring = ring.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              msPoly[y] = ring;
            } else {
              ring = geomSplit[y].replace(" ", "");
              ring = ring.replace("(", "");
              ring = ring.replace(")", "");
              ring = ring.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              msPoly[y] = ring;
            }
          };
          var viewUrl = "";
          if(item.streaming_url != null){
            var viewUrlarr = item.streaming_url.split("/");
            viewUrl = "https://grid.nga.mil/grid/mesh/viewer/" + viewUrlarr[viewUrlarr.length - 2] + "/";
          }
          const lineAtt = {
            ObjectID: y,
            Name: item.name,
            Type: "ModSim"
            access_tag: item.access_tag, 
            cesium_viewer: item.cesium_viewer,
            classification: item.classification,
            collected_at: item.collected_at,
            datatype: item.datatype,
            filesize: item.filesize,
            program: item.program,
            streaming_url: viewUrl,
            sensor: item.sensor,
            //srs: item.srs[0],
            density: item.density,
            Convert_Data_Type:	"https://stews-api.dodterrain.org/admin/",
            Generate_STE_3D_Terrain_pack:	"https://stews-api.dodterrain.org/admin/",
            Clip_and_ship:	"https://stews-api.dodterrain.org/admin/",
            Upload_raw:	"https://stews-api.dodterrain.org/admin/"
          };
          const polygon = {
            type: "polygon",
            rings: [msPoly, fullEnv]
          };
          const graphic = new Graphic({
            geometry: polygon,
            attributes: lineAtt
          });
          msGfx[i] = graphic;
          var el = document.createElement("span");
          el.innerHTML = response.data.modsims[i].name;
          var div = document.getElementById("checkbox-list-label-FG3D Data");
          //insertAfter(div, el);
        }

        for(var i = 0; i < response.data.meshes.length; i++){
          meshPoly = [];
          var fullEnv = [];
          var item = response.data.meshes[i];
          var geomSplit = response.data.meshes[i].geom.split(",");
          for(var y=0; y<geomSplit.length; y++){
            var ring;
            var envelope;
            if(y==0){
              var r = geomSplit[y].substring(10);
              ring = r.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              meshPoly[y] = ring;
            } else if (geomSplit[y].startsWith(' (')) {
              var yInit = y;
              for(var x = 0; x < geomSplit.length - yInit; x++){
                envelope = geomSplit[y].replace(" ", "");
                envelope = envelope.replace("(", "");
                envelope = envelope.replaceAll(")", "");
                envelope = envelope.split(" ");
                envelope[0] = parseFloat(envelope[0]);
                envelope[1] = parseFloat(envelope[1]);
                fullEnv[x] = envelope;
                y++;
              }
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
          var viewUrl = "";
          if(item.streaming_url != null){
            if(item.datatype == "Indexed 3D Scene (I3S)"){
              var viewUrlarr = item.streaming_url.split("/");
              viewUrl = "https://grid.nga.mil/grid/mesh/viewer/" + viewUrlarr[viewUrlarr.length - 2] + "/";
            } else if (item.datatype == "3D Tile") {
              var viewUrlarr = item.streaming_url.split("/");
              viewUrl = "https://grid.nga.mil/grid/export/cesium/" + viewUrlarr[viewUrlarr.length - 2] + "/";
            }
          }
          const lineAtt = {
            ObjectID: y,
            Name: item.name,
            Type: "Mesh"
            access_tag: item.access_tag, 
            cesium_viewer: item.cesium_viewer,
            classification: item.classification,
            collected_at: item.collected_at,
            datatype: item.datatype,
            filesize: item.filesize,
            program: item.program,
            streaming_url: viewUrl,
            sensor: item.sensor,
            //srs: item.srs[0],
            density: item.density,
            Convert_Data_Type:	"https://stews-api.dodterrain.org/admin/",
            Generate_STE_3D_Terrain_pack:	"https://stews-api.dodterrain.org/admin/",
            Clip_and_ship:	"https://stews-api.dodterrain.org/admin/",
            Upload_raw:	"https://stews-api.dodterrain.org/admin/"
          };
          const polygon = {
            type: "polygon",
            rings: [meshPoly, fullEnv]
          };
          const graphic = new Graphic({
            geometry: polygon,
            attributes: lineAtt
          });
          meshGfx[i] = graphic;
          var el = document.createElement("span");
          el.innerHTML = response.data.meshes[i].name;
          var div = document.getElementById("checkbox-list-label-Meshes");
          //insertAfter(div, el);
        }

        for(var i = 0; i < response.data.vectors.length; i++){
          vecPoly = [];
          var fullEnv = [];
          var item = response.data.vectors[i];
          var geomSplit = response.data.vectors[i].geom.split(",");
          for(var y=0; y<geomSplit.length; y++){
            var ring;
            var envelope;
            if(y==0){
              var r = geomSplit[y].substring(10);
              ring = r.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              vecPoly[y] = ring;
            } else if (geomSplit[y].startsWith(' (')) {
              var yInit = y;
              for(var x = 0; x < geomSplit.length - yInit; x++){
                envelope = geomSplit[y].replace(" ", "");
                envelope = envelope.replace("(", "");
                envelope = envelope.replaceAll(")", "");
                envelope = envelope.split(" ");
                envelope[0] = parseFloat(envelope[0]);
                envelope[1] = parseFloat(envelope[1]);
                fullEnv[x] = envelope;
                y++;
              }
            } else if (y == geomSplit.length-1) {
              ring = geomSplit[y].replace(" ", "");
              ring = ring.replaceAll(")", "");
              ring = ring.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              vecPoly[y] = ring;
            } else {
              ring = geomSplit[y].replace(" ", "");
              ring = ring.replace("(", "");
              ring = ring.replace(")", "");
              ring = ring.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              vecPoly[y] = ring;
            }
          };
          var viewUrl = "";
          if(item.streaming_url != null){
            var viewUrlarr = item.streaming_url.split("/");
            viewUrl = "https://grid.nga.mil/grid/mesh/viewer/" + viewUrlarr[viewUrlarr.length - 2] + "/";
          }
          const lineAtt = {
            ObjectID: y,
            Name: item.name, 
            Type: "Vector",
            access_tag: item.access_tag, 
            cesium_viewer: item.cesium_viewer,
            classification: item.classification,
            collected_at: item.collected_at,
            datatype: item.datatype,
            filesize: item.filesize,
            program: item.program,
            streaming_url: viewUrl,
            sensor: item.sensor,
            //srs: item.srs[0],
            density: item.density,
            Convert_Data_Type:	"https://stews-api.dodterrain.org/admin/",
            Generate_STE_3D_Terrain_pack:	"https://stews-api.dodterrain.org/admin/",
            Clip_and_ship:	"https://stews-api.dodterrain.org/admin/",
            Upload_raw:	"https://stews-api.dodterrain.org/admin/"
          };
          const polygon = {
            type: "polygon",
            rings: [vecPoly, fullEnv]
          };
          const graphic = new Graphic({
            geometry: polygon,
            attributes: lineAtt
          });
          vecGfx[i] = graphic;
          var el = document.createElement("span");
          el.innerHTML = response.data.vectors[i].name;
          var div = document.getElementById("checkbox-list-label-Vectors");
          //insertAfter(div, el);
        }

        for(var i = 0; i < response.data.rasters.length; i++){
          rasPoly = [];
          var fullEnv = [];
          var item = response.data.rasters[i];
          var geomSplit = response.data.rasters[i].geom.split(",");
          for(var y=0; y<geomSplit.length; y++){
            var ring;
            var envelope;
            if(y==0){
              var r = geomSplit[y].substring(10);
              ring = r.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              rasPoly[y] = ring;
            } else if (geomSplit[y].startsWith(' (')) {
              var yInit = y;
              for(var x = 0; x < geomSplit.length - yInit; x++){
                envelope = geomSplit[y].replace(" ", "");
                envelope = envelope.replace("(", "");
                envelope = envelope.replaceAll(")", "");
                envelope = envelope.split(" ");
                envelope[0] = parseFloat(envelope[0]);
                envelope[1] = parseFloat(envelope[1]);
                fullEnv[x] = envelope;
                y++;
              }
            } else if (y == geomSplit.length-1) {
              ring = geomSplit[y].replace(" ", "");
              ring = ring.replaceAll(")", "");
              ring = ring.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              rasPoly[y] = ring;
            } else {
              ring = geomSplit[y].replace(" ", "");
              ring = ring.replace("(", "");
              ring = ring.replace(")", "");
              ring = ring.split(" ");
              ring[0] = parseFloat(ring[0]);
              ring[1] = parseFloat(ring[1]);
              rasPoly[y] = ring;
            }
          };
          var viewUrl = "";
          if(item.streaming_url != null){
            var viewUrlarr = item.streaming_url.split("/");
            viewUrl = "https://grid.nga.mil/grid/mesh/viewer/" + viewUrlarr[viewUrlarr.length - 2] + "/";
          }
          const lineAtt = {
            ObjectID: y,
            Name: item.name, 
            Type: "Raster",
            access_tag: item.access_tag, 
            cesium_viewer: item.cesium_viewer,
            classification: item.classification,
            collected_at: item.collected_at,
            datatype: item.datatype,
            filesize: item.filesize,
            program: item.program,
            streaming_url: viewUrl,
            sensor: item.sensor,
            //srs: item.srs[0],
            density: item.density,
            Convert_Data_Type:	"https://stews-api.dodterrain.org/admin/",
            Generate_STE_3D_Terrain_pack:	"https://stews-api.dodterrain.org/admin/",
            Clip_and_ship:	"https://stews-api.dodterrain.org/admin/",
            Upload_raw:	"https://stews-api.dodterrain.org/admin/"
          };
          const polygon = {
            type: "polygon",
            rings: [rasPoly, fullEnv]
          };
          const graphic = new Graphic({
            geometry: polygon,
            attributes: lineAtt
          });
          rasGfx[i] = graphic;
          var el = document.createElement("span");
          el.innerHTML = response.data.rasters[i].name;
          var div = document.getElementById("checkbox-list-label-Elevation Models");
          //insertAfter(div, el);
        }
        var thisView = this.state.jimuMapView.view;
        var allGfx = pcGfx.concat(msGfx, /*rasGfx, vecGfx,*/ meshGfx);
        var fields = [
          {
            name: "ObjectID",
            alias: "Object ID",
            type: "oid"
          },
          {
            name: "Name",
            alias: "Name",
            type: "string"
          },
          {
            name: "Type",
            alias: "Type",
            type: "string"
          },
          {
            name: "access_tag",
            alias: "Access Tag",
            type: "string"
          },
          {
            name: "cesium_viewer",
            alias: "Cesium Viewer URL",
            type: "string"
          },
          {
            name: "classification",
            alias: "Classification",
            type: "string"
          },
          {
            name: "collected_at",
            alias: "Collected At",
            type: "string"
          },
          {
            name: "datatype",
            alias: "Data Type",
            type: "string"
          },
          {
            name: "filesize",
            alias: "File Size",
            type: "double"
          },
          {
            name: "program",
            alias: "Program",
            type: "string"
          },
          {
            name: "streaming_url",
            alias: "View in 3D",
            type: "string"
          },
          {
            name: "sensor",
            alias: "Sensor",
            type: "string"
          },
          {
            name: "density",
            alias: "Density",
            type: "double"
          },
          {
            name: "Convert_Data_Type",
            alias: "Convert Data Type",
            type: "string"
          },
          {
            name: "Generate_STE_3D_Terrain_pack",
            alias: "Generate STE 3D Terrain pack",
            type: "string"
          },
          {
            name: "Clip_and_ship",
            alias: "Clip and ship",
            type: "string"
          },
          {
            name: "Upload_raw",
            alias: "Upload raw data for processing",
            type: "string"
          }];
        var pTemp = {
            title: "{Name}",
            content: [{
              // Pass in the fields to display
              type: "fields",
              fieldInfos: [
                {
                  fieldName: "Type",
                  label: "Type"
                },
                {
                  fieldName: "access_tag",
                  label: "Access Tag"
                },
                {
                  fieldName: "cesium_viewer",
                  label: "Cesium Viewer URL"
                },
                {
                  fieldName: "classification",
                  label: "Classification"
                },
                {
                  fieldName: "collected_at",
                  label: "Collected At"
                },
                {
                  fieldName: "datatype",
                  label: "Data Type"
                },
                {
                  fieldName: "filesize",
                  label: "File Size"
                },
                {
                  fieldName: "program",
                  label: "Program"
                },
                {
                  fieldName: "streaming_url",
                  label: "View in 3D"
                },
                {
                  fieldName: "sensor",
                  label: "Sensor"
                },
                {
                  fieldName: "density",
                  label: "Density"
                },
                {
                  fieldName: "Convert_Data_Type",
                  label: "Convert Data Type"
                },
                {
                  fieldName: "Generate_STE_3D_Terrain_pack",
                  label: "Generate STE 3D Terrain pack"
                },
                {
                  fieldName: "Clip_and_ship",
                  label: "Clip and ship"
                },
                {
                  fieldName: "Upload_raw",
                  label: "Upload raw data for processing"
                }
              ]
            }]
          }
        var uRender = {
          type: "unique-value",  // autocasts as new UniqueValueRenderer()
          field: "Type",
          defaultSymbol: { type: "simple-fill" },  // autocasts as new SimpleFillSymbol()
          uniqueValueInfos: [{
            // All features with value of "North" will be blue
            value: "Pointcloud",
            symbol: {
              type: "simple-fill",  // autocasts as new SimpleFillSymbol()
              color: [ 226, 119, 40, 0.3 ],
              style: "solid",
              outline: {  // autocasts as new SimpleLineSymbol()
                color: "white",
                width: 1
              }   
            }
          }, {
            // All features with value of "East" will be green
            value: "ModSim",
            symbol: {
              type: "simple-fill",  // autocasts as new SimpleFillSymbol()
              color: [ 119, 22, 200, 0.3 ],
              style: "solid",
              outline: {  // autocasts as new SimpleLineSymbol()
                color: "white",
                width: 1
              }
            }
          }, {
            // All features with value of "South" will be red
            value: "Mesh",
            symbol: {
              type: "simple-fill",  // autocasts as new SimpleFillSymbol()
              color: [ 22, 119, 200, 0.3 ],
              style: "solid",
              outline: {  // autocasts as new SimpleLineSymbol()
                color: "white",
                width: 1
              }
            }
          }, {
            // All features with value of "West" will be yellow
            value: "Vector",
            symbol: {
              type: "simple-fill",  // autocasts as new SimpleFillSymbol()
              color: [ 22, 250, 22, 0.3 ],
              style: "solid",
              outline: {  // autocasts as new SimpleLineSymbol()
                color: "white",
                width: 1
              }
            }
          }, {
            value: "Raster",
            symbol: {
              type: "simple-fill",  // autocasts as new SimpleFillSymbol()
              color: [ 112, 108, 17, 0.3 ],
              style: "solid",
              outline: {  // autocasts as new SimpleLineSymbol()
                color: "white",
                width: 1
              }
            }
          }]
        };
        var flayer = new FeatureLayer({
          source: allGfx,
          fields: fields,
          objectIdField: "ObjectID",
          popupTemplate: pTemp,
          renderer: uRender
        })
        thisView.map.add(flayer);
        flayer
          .when(() => {
            return flayer.queryExtent();
          })
          .then((response) => {
            thisView.goTo(response.extent);
          });
        //this.props.dispatch(appActions.widgetStatePropChange("widget_207", "dataSource", flayer));
        }, 
      //Error:
      (error) => {
        console.log(error);
      });
  }

  searchBtn = () => {
    const classes = useStyles();
    //For some reason tooltip doesn't work when disabled
    return(
      //<Tooltip title="Zoom in further to enable search">
        <span>
        <Button
            className={classes.searchBtn}
            variant="contained"
            size="large"
            color="primary"
            //className={classes.loginBtn}
            onClick={this.search}
            disabled={this.state.isButtonDisabled}
            >
            Search in Map
        </Button>
        </span>
      //</Tooltip>
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

