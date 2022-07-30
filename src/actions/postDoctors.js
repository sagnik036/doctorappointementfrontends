import axios from "axios";

const DoctorPost = (username,password,name) => {
  return axios
    .post("http://localhost:8000/doctors/",{
        username:username,
        password:password,
        name:name,
        
    })
    .then((obj) => {
      return obj;
    });
};

export default DoctorPost;