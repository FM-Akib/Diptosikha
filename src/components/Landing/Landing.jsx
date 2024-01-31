import React from 'react';
import { ReactTyped } from 'react-typed';
import './Landing.css';
const Landing = () => {


    
 

    return (
        <div>
           <h1 className='typed-text'>
        Welcome to{" "}
        <ReactTyped strings={["Diptosikha Social Organization ..."]} typeSpeed={100} loop />
      </h1>
        </div>
    );
};

export default Landing;