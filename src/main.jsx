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
import Signup from './components/Signup/Signup.jsx';
import Team from './components/Team/Team.jsx';
import Notfound from './components/Notfound/Notfound.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Notfound/>,
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
        path: "team",
        element: <Team/>,
        loader: ()=>fetch('teams.json')
      },
      {
        path: "donation",
        element: <Donation/>
      },
      {
        path: "bloodbank",
        element: <BloodBank/>,
        loader: ()=>fetch('bloodbank.json')
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <Signup/>
      }
    ]
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
