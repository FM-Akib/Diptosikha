import React from 'react';
import logo from '../../assets/logoD.png';
const Header = () => {
    return (
       <div>
            <div className="upHeader">
                    <h3>Hotline: (+00) 545 545 323</h3>
                    <img src={logo} alt="logo"/>
            </div>
       </div>
    );
};

export default Header;