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
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes.jsx';
import Profile from './components/Profile/Profile.jsx';
import Blog from './components/Blog/Blog.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


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
        loader: () =>fetch('http://localhost:5000/users')
      },
      {
        path: "donation",
        element: <Donation/>
      },
      {
        path: "bloodbank",
        element: <BloodBank/>,
        loader: ()=>fetch('http://localhost:5000/users')
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <Signup/>
      },
      {
        path: "programs/:id",
        element: <Blog></Blog>,
        loader: ({ params }) => fetch(`http://localhost:5000/programs/${params.id}`)
      },
      {
        path: "profile",
        element: <PrivateRoutes><Profile/></PrivateRoutes>
      }
    ]
  }
  
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
   
  </React.StrictMode>,
)
