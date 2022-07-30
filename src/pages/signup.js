import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DoctorPost from "../actions/postDoctors";
import { WindowSharp } from "@mui/icons-material";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState();

  const signup = () => {
    DoctorPost(username, password, name, image)
      .then((response) => {
        if (response.data) {
          window.alert("created");
          localStorage.setItem("user", response.data.username);
        }
      })
      .catch((error) => {
        if (error.response.data) {
          window.alert("failed");
        }
      });
  };
  if (localStorage.getItem("user") && localStorage.getItem("user") != "") {
    return <Navigate to="/" />;
  } else {
    return (
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form>
            <TextField
              fullWidth
              label="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <hr />
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <hr />
            <TextField
              fullWidth
              label="Name"
              placeholder="EnterName"
              onChange={(e) => setName(e.target.value)}
            />
            <hr />
            <hr />
          </form>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => signup()}
          >
            Sign up
          </Button>
        </Paper>
      </Grid>
    );
  }
};

export default Signup;
