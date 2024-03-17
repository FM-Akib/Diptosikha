import './Signup.css';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const notify_signup = () => toast.success('Sign up successful!.');
const notify_pass = () => toast.error("Password should be at least 6 characters.")
const Signup = () => {
    const navigate =useNavigate();
const {createUser,signInWithGoogle}=useContext(AuthContext)


const handleSignUp=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const mobile = e.target.mobile.value;
    const bloodGroup = e.target.querySelector('select').value;

  
    if(password.length<=5){
        notify_pass();
        return;
    }
   

    createUser(email, password)
    .then(result => {
        console.log(result.user);
        // notify_signup();
       
        const img='',facebook="",address="",education="",lastDonate="";
        const user = {name,email,password,mobile,bloodGroup,img,facebook,address,education,lastDonate}
              
        axios.post('http://localhost:5000/users',user)
         .then(data => {

            if(data.data.acknowledged){
                navigate('/');
                notify_signup();
            }
            }
        )
    })
    .catch(err=>{
        console.log(err);
    })




}

const handleSignUpGoogle=() => {
    signInWithGoogle()
    .then(result => {
        
        // notify_signup();
        // navigate('/');
        const name=result.user.displayName;
        const email=result.user.email;
        const img=result.user.photoURL;
    

        const password="admin",facebook="",address="",education="",lastDonate="",mobile="",bloodGroup="";
        const user = {name,email,password,mobile,bloodGroup,img,facebook,address,education,lastDonate}
              
        axios.post('http://localhost:5000/users',user)
         .then(data => {

            if(data.data.acknowledged){
                navigate('/');
                notify_signup();
            }
            }
        )
    })
    .catch(err=>{
        console.log(err.message);
    })
}

return (
<>
<Toaster /> 

<div className=" pt-5 grid md:grid-cols-2 md:w-[80%] w-[95%] mx-auto  items-center ">


   <div className=" ">
       <img src="https://i.ibb.co/BTsV3C1/Post.png" />
   </div>

   <div className="md:px-10">
   <div className="w-full space-y-6 text-gray-600 sm:max-w-md interFont">
                <div className="text-center">
                    <img src="https://i.ibb.co/1JwGF7F/a-social-organization.png" width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-3xl font-bold sm:text-3xl">Create an account</h3>
                        <p className="">Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                       onSubmit={handleSignUp}
                        className="space-y-5"

                    >
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder='Enter your name'
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>

                        <div className="flex justify-center items-center">

                        <div className="mr-2 relative">
                            <label className="font-medium">
                                Blood Group
                            </label>
                            <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-8 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <select className="w-full mt-2 py-2 px-3 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                        <option>A+</option>
                        <option>B+</option>
                        <option>O+</option>
                        <option>AB+</option>
                        <option>A-</option>
                        <option>B-</option>
                        <option>O-</option>
                        <option>AB-</option>
                        <option>Dont know</option>
                    </select>
                        </div>
                        <div>
                            <label className="font-medium">
                                Mobile
                            </label>
                            <input
                                name="mobile"
                                type="text"
                                required
                                placeholder='Enter your Contact'
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>

                        </div>



                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder='Enter your email'
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Enter password here'
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Create account
                        </button>
                    </form >
                    <div className="mt-5">
                        <button onClick={handleSignUpGoogle} className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g >
                                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_40">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
    </div>


    </div>




</>   
    );
};

export default Signup;