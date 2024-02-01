import React from 'react';
import error from '../../assets/error.jpg';
import './Notfound.css';
const Notfound = () => {
    return (
        <div className='error '>
            <img  src={error} alt="Not found 404"/>
        </div>
    );
};

export default Notfound;