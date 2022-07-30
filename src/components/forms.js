import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const Form = (props) => {
  const [name, setName] = React.useState("");
  const [describtion, setDescription] = React.useState("");
  const [value, setValue] = React.useState("");
  
  
  
  return (
    <div>
      Required speciality :&nbsp;
      <TextField size="small" onChange={(e)=>(props.setSpeciality(e.target.value))}/>
      <br />
      <br />
      Appointment Date &nbsp; :{" "}
      <input type="date" onChange={(e) => (props.setDate(e.target.value))} />
      <br />
      <br />
      Start Time &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:{" "}
      <input type="time" onChange={(e) => (props.setStartTime(e.target.value))} />
      <br />
    </div>
  );
};

export default Form;
