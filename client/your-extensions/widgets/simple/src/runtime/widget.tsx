/** @jsx jsx */
import {jsx} from 'jimu-core';
import * as React from 'react';
import "./Login.css";
import Login from './components/Login';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from '@material-ui/core/DialogContent';
import Button from "@material-ui/core/Button";

type State = {
  isOpen: boolean
};

const state:State = {
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
  }

  return (
    <div>
      {/* <Button
        variant="primary"
        onClick={modalOpen}
      >
      </Button> */}
      <Button variant="contained" onClick={handleClickOpen} id="loginButton">
        <img src="https://imgur.com/4qtt79Y.png" height="25" width="25"></img>
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
      >        
        <DialogContent>
          <Login />
        </DialogContent>
      </Dialog>
    </div>
  );
}