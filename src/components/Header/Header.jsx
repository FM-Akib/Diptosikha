import  { useContext, useState } from 'react';
import logo from '../../assets/logo_diptosikha.jpg';
import './Header.css';
import Activelink from '../Activelink/Activelink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faX } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoMdLogOut } from "react-icons/io";
import NonLogo from '../../assets/NonUser.jpg';




const Header = () => {
    const [menu,setMenu]=useState(false);
    const {user,logOut}=useContext(AuthContext);


    return (      
        <nav className='NavBar'>
            <img className='logo_diptoshikha' src={logo} alt=""/>
            <ul className={` navItems p-4 duration-500 pl-10 flex items-center ${menu===true?"top-20":"-top-96"}`}>
                <Activelink to="/">Home</Activelink>
                <Activelink to="/about">About us</Activelink>
                <Activelink to="/team">Team</Activelink>
                <Activelink to="/donation">Donation</Activelink>
                <Activelink to="/bloodbank">Blood Bank</Activelink>
                {
                    user ? <>
{
    user.photoURL?<img className="cursor-pointer mr-3 ml-3  w-10 h-10  rounded-full object-cover" src={user.photoURL}/>:
    <img className="cursor-pointer mr-3 ml-3  w-10 h-10  rounded-full object-cover" src={NonLogo}/>
}
<span onClick={logOut} className="cursor-pointer"><IoMdLogOut className='text-3xl'/></span> </> :
                    <>
                    <Activelink to="/login">Login</Activelink>
                    <Activelink to="/signup">Sign up</Activelink>
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
    
    );
};

export default Header;