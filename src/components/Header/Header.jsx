import React, { useState } from 'react';
import logo from '../../assets/logo_diptosikha.jpg';
import './Header.css';
import Activelink from '../Activelink/Activelink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faX } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menu,setMenu]=useState(false);
    return (      
        <nav className='NavBar'>
            <img src={logo} alt=""/>
            <ul className={` navItems p-4 duration-500 pl-10 ${menu===true?"top-20":"-top-96"}`}>
                <Activelink to="/">Home</Activelink>
                <Activelink to="/about">About us</Activelink>
                <Activelink to="/team">Team</Activelink>
                <Activelink to="/donation">Donation</Activelink>
                <Activelink to="/bloodbank">Blood Bank</Activelink>
                <Activelink to="/login">Login</Activelink>
                <Activelink to="/signup">Sign up</Activelink>
            </ul>
            <div  onClick={()=>setMenu(!menu)} className='barsDiv md:hidden'>
              {      
              <span>{menu===true? <FontAwesomeIcon className="icnMbl" icon={faX} />
              : <FontAwesomeIcon className="icnMbl" icon={faBars} />}
              </span>     
              }
            </div>
        </nav>
    
    );
};

export default Header;