/* import * as React from 'react';
import { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";

import Button from '@material-ui/core/Button';

//styling for form components
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    },
    toast: {
      textAlign: 'center'
    }
  })
);

//state type
type State = {
  username: string
  password:  string
  STEWSurl: string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
  username: '',
  password: '',
  STEWSurl: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'setSTEWSurl', payload: string }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

  //switch for different form operations
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setSTEWSurl':
      return {
        ...state,
        STEWSurl: action.payload
      }
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}

//main login function
const Search = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
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

        let inSR = new esri.SpatialReference({
          wkid: crs
        });
        var outSR = new esri.SpatialReference({
          wkid: 4326
        });
        let inPoint = new Point({x: xmax, y: ymax, spatialReference: inSR});
        let inPoint2 = new Point({x: xmin, y: ymin, spatialReference: inSR});
        //var geometryService = new project.project("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");
        //const geomSer = new geometryService();
        let projectedPoints = projection.project([inPoint, inPoint2], outSR);
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
        const point: Point = this.state.jimuMapView.view.toMap({
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
  //Here's where we actually handle the login
  const handleSearch = () => {
    
    //format the URL
    const baseUrl = globalThis.STEWSUrl;
    const email = globalThis.email;
    const token = globalThis.accessToken;
    const requestURL = baseUrl + "/admin/api/products?email="+email+"&geom=POLYGON%28%28"
                        +something+"%29%29&geoms=false&files=false"

    //Axios sends URI to url
    axios.get(encodeURI(baseUrl + queryString))
    //Successful:
    .then((response) => {
      console.log(response);
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successful'
      });
      var accessToken = response.data.access_token;
      ///TODO: refresh token, check time this token is available
      globalThis.accessToken = accessToken;
      globalThis.userEmail = state.username;
      console.log(globalThis.accessToken);
    }, (error) => {
      //Unsuccessful
      console.log(error);
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect email or password'
      });
    });
  };

  //The HTMLish stuff for the form
  return (
    <div className="widget-starter jimu-widget">

        {this.props.hasOwnProperty("useMapWidgetIds") && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
          <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.activeViewChangeHandler} />
        )}
        <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.loginBtn}
            onClick={handleSearch}
            //disabled={state.isButtonDisabled}
            >
            Login
        </Button>
    </div>
  );
}

export default Search; */