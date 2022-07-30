import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from './pages/home';
import SignInOutContainer from './components/signinupco';


const routes = [
    {
     path: '/',
     element: <Home/>,
    //  children: [
    //    { path: '/events', element: <Event/> },
    //  ]
    },
    {
        path: '/auth',
        element: <SignInOutContainer/>,
       //  children: [
       //    { path: '/events', element: <Event/> },
       //  ]
       },
 ];
 
export default routes;