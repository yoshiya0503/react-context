/**
 * @fileoverview DialogComponent
 * @name dialog.js
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import React, { useContext } from 'react';
import { DialogContext } from '../Context/dialog';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default () => {
  const ctx = useContext(DialogContext);

  return (
    <Dialog
      open={ctx.state.isOpen}
      onClose={ctx.action.close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"API Error Ocured"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          { ctx.state.message }
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={ctx.action.close} color="primary" autoFocus>
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
