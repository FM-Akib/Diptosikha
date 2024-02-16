import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types'; 
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <>
        <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
            <span className='sr-only '>Loading...</span>
            <div className='h-8 w-8 bg-green-700 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-8 w-8 bg-green-700 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-8 w-8 bg-green-700 rounded-full animate-bounce'></div>
        </div>
        </>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;
PrivateRoutes.propTypes={
children:PropTypes.node
}