import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Divider,
} from "@mui/material"

import Checkbox from "@mui/material";
import FormControlLabel from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';


const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOpenIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => login()}
        >
          Sign in
        </Button>
        <br />
        <br />
      </Paper>
    </Grid>
  );
};

export default Login;
