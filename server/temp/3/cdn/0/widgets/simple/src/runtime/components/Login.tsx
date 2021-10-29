import * as React from 'react';
import { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
  STEWSurl: 'https://stews-api.dodterrain.org',
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
const Login = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  //if form isn't filled out, set login button to disabled
  useEffect(() => {
    if (state.STEWSurl.trim() && state.username.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.STEWSurl, state.username, state.password]);

  //Here's where we actually handle the login
  const handleLogin = () => {
    
    //format the URL
    const baseUrl = state.STEWSurl;
    const queryString = '/admin/api/login?email='+ state.username +'&password='+ state.password;

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
      globalThis.STEWSUrl = state.STEWSurl;
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

  //If user presses enter, handle login
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  //These update our form values
  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }

  const handleSTEWSurlChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setSTEWSurl',
        payload: event.target.value
      });
    };

  //The HTMLish stuff for the form
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login to STEWS" />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="STEWSurl"
              type="text"
              label="STEWS URL"
              placeholder="Enter URL Here"
              margin="normal"
              defaultValue="https://stews-api.dodterrain.org"
              onChange={handleSTEWSurlChange}
              onKeyPress={handleKeyPress}
            />
            <u><a href="https://stews-api.dodterrain.org" target="_blank">Create an account here</a></u>
            <TextField
              error={state.isError}
              fullWidth
              id="username"
              type="email"
              label="Username/Email"
              placeholder="Username/Email"
              margin="normal"
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleLogin}
            disabled={state.isButtonDisabled}>
            Login
          </Button>
        </CardActions>
        <h3 className={classes.toast}>{state.helperText}</h3>
      </Card>
    </form>
  );
}

export default Login;