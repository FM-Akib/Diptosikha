// import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/error.jpg';
import './Notfound.css';
const Notfound = () => {
    return (
        <>
        <div className='error '>
            <img  src={error} alt="Not found 404"/>
        </div>


        <div className="flex justify-center items-center">
        <div className="relative inline-flex group">
  <div
    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
  </div>
  <Link to="/"  title="" role="button"
    className="relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600 rounded">
    Go Back
  </Link>
</div>
        </div>
        </>
    );
};

export default Notfound;