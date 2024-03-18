import { FaFacebook } from "react-icons/fa6";

import { Link } from "react-router-dom";

const BloodCard = (props) => {
     const {name,email,mobile,img,bloodGroup,lastDonate,address,facebook}=props.blood;
 
    
    return (
        <div className=" flex items-center justify-center dark:bg-gray-900">

        
        <div
            className="relative w-full max-w-2xl my-8 md:my-8 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">
    
            <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-3 py-2 bg-red-500 text-white dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
            {bloodGroup}
            </span>
    
            <div className="w-full flex justify-center sm:justify-start sm:w-auto">
                <img className="object-cover w-20 h-20 mt-3 mr-3 rounded-full" src={img}/>
            </div>
    
            <div className="w-full sm:w-auto flex flex-col items-start sm:items-start">
    
                <p className="font-display mb-2 text-2xl font-semibold dark:text-gray-200" >
                {name}
                </p>
    
                <div className="mb-4 md:text-lg text-gray-500">
                    <p>Last Donated: {lastDonate}</p>
                    <p>Mobile: {mobile}</p>
                    <p>Address: {address}</p>
                    <p>Email: {email}</p>
                </div>
    
                <div className="flex gap-4">
    
                    <Link title="Facebook url" to={`${facebook?facebook:'https://www.facebook.com/diptosikha2017'}`} target="_blank"
                        rel="noopener noreferrer">
                       <FaFacebook className="text-2xl" />
                    </Link>
    
                    <Link title="website url" to="https://www.facebook.com/diptosikha2017" target="_blank" rel="noopener noreferrer">
                        <svg className="h-6 w-6 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path 
                                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
                            </path>
                        </svg>
                    </Link>
    
                </div>
            </div>
    
        </div>
    
    </div>
    );
};

export default BloodCard;