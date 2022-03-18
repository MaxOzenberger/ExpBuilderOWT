/** @jsx jsx */
import { jsx } from 'jimu-core';
import * as React from 'react';
import "./Login.css";
import Login from './components/Login';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from '@material-ui/core/DialogContent';
import Button from "@material-ui/core/Button";
const state = {
    isOpen: false
};
export default function LoginWidget() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const modalOpen = () => {
        state.isOpen = !state.isOpen;
        console.log(state.isOpen);
    };
    return (jsx("div", null,
        jsx(Button, { variant: "contained", onClick: handleClickOpen, id: "loginButton" },
            jsx("img", { src: "https://imgur.com/4qtt79Y.png", height: "25", width: "25" })),
        jsx(Dialog, { open: open, keepMounted: true, onClose: handleClose },
            jsx(DialogContent, null,
                jsx(Login, null)))));
}
//# sourceMappingURL=widget.js.map