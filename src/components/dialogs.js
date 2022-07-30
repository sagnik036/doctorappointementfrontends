import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DynamicDialog(props) {
  return (
    
      
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        fullWidth={props.fullWidth}
        maxWidth={props.maxWidth}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent >
          <DialogContentText>{props.content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose} size="small">
            Cancel
          </Button>
          {props.buttonName ? (
            <Button
              onClick={
                props.handleOperations ? props.handleOperations : props.handleClose
              }
              size="small"
            >
              {props.buttonName}
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
  );
}
