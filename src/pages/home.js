import React from "react";
import ButtonAppBar from "../components/appbar";
import SimpleContainer from "../components/container";



const Home = () => {
    const [name , setName] = React.useState("Welcome")
    const [action , setAction] = React.useState("Login")
    return ( 
        <>
          <ButtonAppBar
            name = {name}
            action = {action}
          />
          <SimpleContainer/>
        </>
     );
}
 
export default Home;