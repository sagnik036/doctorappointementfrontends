import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Form from './forms';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DynamicDialog from './dialogs';
import Events from '../actions/events';
import { WindowSharp } from '@mui/icons-material';
import Success from './succes';


export default function MultiActionAreaCard(props) {
  
  const [addPopup ,setAddPopup] = React.useState(false)
  const [docId , setDocId] = React.useState(0)
  const [speciality,setSpecility] = React.useState("")
  const [date , setDate] = React.useState(new Date())
  const [start_time , setStartTime] = React.useState()
  const [end_time , setEndTime] = React.useState()
  const [succesPop , setSuccessPop] = React.useState(false)
  const [docName ,setDocName] = React.useState("")
  
  const addClick = (e) => {
    setAddPopup(true);
    setDocId(e)
  };

  const handlePopClose = () => {
    setAddPopup(false);
    setSuccessPop(false)
  };

  const handleOperations =()=>{
    if (docId>0){
      Events(speciality,date,start_time,end_time,docId).then(
        response =>{
           if (response.data){
            // "doctorname" : user.name,
            // "Appoinment Date" : serializer.data['date_appointment'],
            // "Start Time" : serializer.data['start_time'],
            // "end Time"  :  time
               setSuccessPop(true)
              //  window.alert(response.data.doctorname , response.data.Appoinment_Date)
               setDocName(response.data.doctorname)
               setEndTime(response.data.end_Time)
               setAddPopup(false)
           }
        }
      )
      .catch((error) => {
        if (error.response.data) {
          setAddPopup(false)
          window.alert("failed")
        }
      });
   }
  }
  


  return (
    <div>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.data.profile_pic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Name : Dr {props.data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
         mx:'35%'
      }}>
        <Button size="small" color="primary" variant='contained' 
         onClick={()=>(addClick(props.data.id))}
        >
          BOOK
        </Button>
      </CardActions>
    </Card>
    {addPopup ? (
          <DynamicDialog
            open={addPopup}
            handleClose={handlePopClose}
            handleOperations={handleOperations}
            fullWidth={false}
            title={`APPOINTMENT FORM  : DOC ID : ${docId}`}
            buttonName="SUBMIT"
            maxWidth="sx"
            content={
              <Form
                setSpeciality = {setSpecility}
                setDate = {setDate}
                setStartTime = {setStartTime}
                setEndTime = {setEndTime}
              />
            }
          />
        ) : null}

       {succesPop ? (
          <DynamicDialog
            open={succesPop}
            handleClose={handlePopClose}
            handleOperations={handleOperations}
            fullWidth={false}
            title="SUCCESS"
            buttonName=""
            maxWidth="sx"
            content={
               <Success
                 name  ={docName}
                 date = {date}
                 start_time ={start_time}
                 end_time={end_time}
               />
            }
          />
        ) : null}
    </div>
  );
}
