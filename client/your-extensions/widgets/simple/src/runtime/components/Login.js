import * as React from 'react';
import { useReducer, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from 'react-bootstrap/Button';
//styling for form components
const useStyles = makeStyles((theme) => createStyles({
    container: {
        position: 'absolute',
        top: "0px",
        left: "0px",
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
    /* position: "relative",
    top: "-33px" */
    },
    toast: {
        textAlign: 'center'
    }
}));
const initialState = {
    username: '',
    password: '',
    STEWSurl: 'https://stews-api.dodterrain.org',
    isButtonDisabled: true,
    helperText: '',
    isError: false,
    isOpen: false
};
//switch for different form operations
const reducer = (state, action) => {
    switch (action.type) {
        case 'setUsername':
            return Object.assign(Object.assign({}, state), { username: action.payload });
        case 'setPassword':
            return Object.assign(Object.assign({}, state), { password: action.payload });
        case 'setSTEWSurl':
            return Object.assign(Object.assign({}, state), { STEWSurl: action.payload });
        case 'setIsButtonDisabled':
            return Object.assign(Object.assign({}, state), { isButtonDisabled: action.payload });
        case 'loginSuccess':
            return Object.assign(Object.assign({}, state), { helperText: action.payload, isError: false });
        case 'loginFailed':
            return Object.assign(Object.assign({}, state), { helperText: action.payload, isError: true });
        case 'setIsError':
            return Object.assign(Object.assign({}, state), { isError: action.payload });
    }
};
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
        }
        else {
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
        const queryString = '/admin/api/login?email=' + state.username + '&password=' + state.password;
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
            //let timer: ReturnType<typeof setTimeout> = setTimeout(() => {console.log(globalThis.accessToken), 3000});
            /* let cb = function() {console.log(globalThis.accessToken);};
            let n: ReturnType<typeof setTimeout>;
            n = setTimeout(cb, 2000); */
            console.log(globalThis.accessToken);
            document.getElementById("loginButton").style.backgroundColor = "lightgreen";
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
    const handleKeyPress = (event) => {
        if (event.keyCode === 13 || event.which === 13) {
            state.isButtonDisabled || handleLogin();
        }
    };
    //These update our form values
    const handleUsernameChange = (event) => {
        dispatch({
            type: 'setUsername',
            payload: event.target.value
        });
    };
    const handlePasswordChange = (event) => {
        dispatch({
            type: 'setPassword',
            payload: event.target.value
        });
    };
    const handleSTEWSurlChange = (event) => {
        dispatch({
            type: 'setSTEWSurl',
            payload: event.target.value
        });
    };
    //The HTMLish stuff for the form
    return (React.createElement("form", { className: classes.container, noValidate: true, autoComplete: "off" },
        React.createElement(Card, { className: classes.card },
            React.createElement(CardHeader, { className: classes.header, title: "Login to STEWS" }),
            React.createElement(CardContent, null,
                React.createElement("div", null,
                    React.createElement(TextField, { error: state.isError, fullWidth: true, id: "STEWSurl", type: "text", label: "STEWS URL", placeholder: "Enter URL Here", margin: "normal", defaultValue: "https://stews-api.dodterrain.org", onChange: handleSTEWSurlChange, onKeyPress: handleKeyPress }),
                    React.createElement("u", null,
                        React.createElement("a", { href: "https://stews-api.dodterrain.org/admin/user/register", target: "_blank" }, "Create an account here")),
                    React.createElement(TextField, { error: state.isError, fullWidth: true, id: "username", type: "email", label: "Username/Email", placeholder: "Username/Email", margin: "normal", onChange: handleUsernameChange, onKeyPress: handleKeyPress }),
                    React.createElement(TextField, { error: state.isError, fullWidth: true, id: "password", type: "password", label: "Password", placeholder: "Password", margin: "normal", onChange: handlePasswordChange, onKeyPress: handleKeyPress }))),
            React.createElement(CardActions, null,
                React.createElement(Button, { variant: "contained", size: "large", color: "secondary", className: classes.loginBtn, onClick: handleLogin, disabled: state.isButtonDisabled }, "Login")),
            React.createElement("h3", { className: classes.toast }, state.helperText))));
};
export default Login;
//# sourceMappingURL=Login.js.map