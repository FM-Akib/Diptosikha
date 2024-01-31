import React from 'react';
import { ReactTyped } from 'react-typed';
import './Landing.css';
import backGround from '../../assets/Background_d.png'


const Landing = () => {


    
 

    return (
        <div>
          {/* <div className="back-container bg-cover">
           
           </div> */}

         


        <div className="header">
        <img src={backGround} alt=""/>
        <div className="back-head">
        <h1 className='typed-text '>Welcome to{" "}
         <ReactTyped strings={["Diptosikha Social Organization ..."]} typeSpeed={100} loop />
         </h1>
        </div>
        </div>


        </div>
    );
};

export default Landing;