const Success = (props) => {
  return (
    <div>
      <h4>Doctor Name : {props.name}</h4>
      <h4> Date : {props.date}</h4>
      <h4>StartTime : {props.start_time}</h4>
      <h4>endTime :{props.end_time}</h4>
    </div>
  );
};

export default Success;
