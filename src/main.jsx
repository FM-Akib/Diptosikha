import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Donation from './components/Donation/Donation.jsx';
import BloodBank from './components/Bloodbank/BloodBank.jsx';
import Login from './components/Login/Login.jsx';
import Landing from './components/Landing/Landing.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element: <Landing/>
      },
      {
        path: "about",
        element:<About/>
      },
      {
        path: "donation",
        element: <Donation/>
      },
      {
        path: "bloodbank",
        element: <BloodBank/>
      },
      {
        path: "login",
        element: <Login/>
      },
    ]
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
