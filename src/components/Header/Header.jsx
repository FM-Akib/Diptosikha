import React from 'react';
import logo from '../../assets/logo_diptosikha.jpg';
import './Header.css';
import { TERipple } from 'tw-elements-react';
import { Link } from 'react-router-dom';
import Activelink from '../Activelink/Activelink';



const Header = () => {
    return (      
        <nav className='NavBar'>
            <img src={logo} alt=""/>
            <ul className="navItems">
                <Activelink to="/">Home</Activelink>
                <Activelink to="/about">About us</Activelink>
                <Activelink to="/donation">Donation</Activelink>
                <Activelink to="/bloodbank">Blood Bank</Activelink>
                <Activelink to="/login">Login</Activelink>
                <Activelink to="/login">Sign up</Activelink>
            </ul>
        </nav>
    
    );
};

export default Header;