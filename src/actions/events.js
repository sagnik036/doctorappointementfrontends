import axios from "axios";

const Events = (speciality,date_appointment,start_time,end_time,doctor_id) => {
  
  return axios
    .post("http://localhost:8000/events/", {
      speciality: speciality,
      date_appointment: date_appointment,
      start_time: start_time,
      end_time: end_time,
      doctor_id: doctor_id,
    })
    .then((obj) => {
      return obj;
    });
};

export default Events;
