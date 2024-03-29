

import  { useContext, useState } from 'react';
import logo from '../../assets/logo_diptosikha.jpg';
import './Header.css';
import Activelink from '../Activelink/Activelink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faX } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoMdLogOut } from "react-icons/io";
import NonLogo from '../../assets/NonUser.jpg';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const notify_logout = () => toast('Logged Out!', {
    icon: '📤',
  });




const Header = () => {
    const [menu,setMenu]=useState(false);
    const {user,logOut}=useContext(AuthContext);

    const handlelogOut=()=>{
        logOut()
        .then(()=>{
            notify_logout();
        })
    }
    const handleMenuItemClick = () => {
        setMenu(false); // Close the menu when a menu item is clicked
    };
    return ( 
        <>
        <Toaster />      
        <nav className='NavBar'>
           <Link to="/"><img className='logo_diptoshikha' src={logo} alt=""/></Link> 
            <ul className={` navItems p-4 duration-500 pl-10 flex items-center ${menu===true?"top-20":"-top-[450px]"}`}>
            <Activelink to="/" onClick={handleMenuItemClick}>Home</Activelink>
<Activelink to="/about" onClick={handleMenuItemClick}>About us</Activelink>
<Activelink to="/team" onClick={handleMenuItemClick}>Team</Activelink>
<Activelink to="/donation" onClick={handleMenuItemClick}>Donation</Activelink>
<Activelink to="/bloodbank" onClick={handleMenuItemClick}>Blood Bank</Activelink>

                {
            user ? <>{
        user.photoURL?  <Link to="/profile">
        <img className="cursor-pointer mr-3 ml-3  w-10 h-10  rounded-full object-cover" src={user.photoURL}/></Link>:
        <Link to="/profile"><img className="cursor-pointer mr-3 ml-3  w-10 h-10  rounded-full object-cover" src={NonLogo}/></Link> 
    }
<span onClick={handlelogOut} className="cursor-pointer"><IoMdLogOut className='text-3xl'/></span> </> :
                    <>
                    <Activelink to="/login"  onClick={handleMenuItemClick}>Login</Activelink>
                    <Activelink to="/signup" onClick={handleMenuItemClick}>Sign up</Activelink>
                    </>
                }
            </ul>
            <div  onClick={()=>setMenu(!menu)} className='barsDiv md:hidden'>
              {      
              <span>{menu===true? <FontAwesomeIcon className="icnMbl" icon={faX} />
              : <FontAwesomeIcon className="icnMbl" icon={faBars} />}
              </span>     
              }
            </div>
        </nav>
        </>
    );
};

export default Header;