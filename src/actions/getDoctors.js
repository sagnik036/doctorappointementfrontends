import axios from "axios";

const Doctors = () => {
  return axios
    .get("http://localhost:8000/doctors/")
    .then((obj) => {
      return obj;
    });
};

export default Doctors;