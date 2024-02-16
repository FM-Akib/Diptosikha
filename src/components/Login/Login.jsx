import { useContext } from 'react';
import './Login.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const notify_Login = () => toast.success('Successfully Login!')



const Login = () => {


    const {logInWithEmailandPass,signInWithGoogle}=useContext(AuthContext)


    const handleLogin=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        logInWithEmailandPass(email, password)
        .then(result => {
            console.log(result.user);
            notify_Login()
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    const handleSignInGoogle=() => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            notify_Login()
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    



return (
    <>
    <Toaster />   
  <div className="py-20 login-page">
    <div className=" flex h-full items-center justify-center">
        <div className="rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 flex-col flex h-full items-center justify-center sm:px-4">
            <div className="flex h-full flex-col justify-center gap-4 p-6">
                <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
                    <form onSubmit={handleLogin} className="flex flex-col gap-4 pb-4" data-hs-cf-bound="true">
                        <h1 className="mb-4 text-2xl font-bold">Login</h1>
                        <div>
                            <div className="mb-2">
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300">Email:</label>
                            </div>
                            <div className="flex w-full rounded-lg pt-1">
                                <div className="relative w-full">
<input className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg" id="email" type="email" name="email" placeholder="email@example.com" required=""/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2">
                                <label className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                    data-testid="flowbite-label">Password</label>
                            </div>
                            <div className="flex w-full rounded-lg pt-1">
                                <div className="relative w-full">
                                    <input className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg" id="password" type="password" name="password" required=""/>
                                </div>
                            </div>
                            <p className="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">Forgot password?</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button type="submit" className="border  focus:ring-2 p-0.5  bg-sky-700 hover:bg-sky-700 active:bg-sky-800 text-gray-700   rounded-lg hover:text-gray-100">
                                <span
                                    className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 ">
                                    Login
                                </span>
                            </button>


                            <button onClick={handleSignInGoogle} 
                            type="button"  className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg ">
                                <span
                                    className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                                    <svg stroke="currentColor" fill="currentColor" version="1.1"
                                        x="0px" y="0px" viewBox="0 0 48 48" 
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#FFC107"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
                                        </path>
                                        <path fill="#FF3D00"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                                        </path>
                                        <path fill="#4CAF50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
                                        </path>
                                        <path fill="#1976D2"
                                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                                        </path>
                                    </svg>
                                    Sign in with Google
                                </span>
                            </button>
                            <button type="button"
                                className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg ">
                                <span
                                    className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                                    <svg stroke="currentColor" fill="currentColor"
                                        viewBox="0 0 448 512" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z">
                                        </path>
                                    </svg>Sign in with Facebook</span>
                            </button>
                        </div>
                    </form>
                    <div className="min-w-[270px]">
                        <div className="mt-4 text-center">New user?
                            <a className="text-blue-500 underline hover:text-blue-600" href="/signup">Create account
                                here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    );
};

export default Login;