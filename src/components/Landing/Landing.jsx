import React from 'react';
import { ReactTyped } from 'react-typed';
import './Landing.css';
import backGround from '../../assets/Background_d.png'
import { Link } from 'react-router-dom';
import LandingHead from '../../assets/landingHead.png';
import volenteer from '../../assets/Volunteer.png';
import sponsor from '../../assets/sponsor.png';
import donation from '../../assets/donation.png';
import education from "../../assets/mission_edu.png";

const Landing = () => {


    
 

    return (
        <>
          {/* <div className="back-container bg-cover">
           
           </div> */}
        {/* <div className="header">
        <img src={backGround} alt=""/>
        <div className="back-head">
        <h1 className='typed-text '>Welcome to{" "}
         <ReactTyped strings={["Diptosikha Social Organization ..."]} typeSpeed={100} loop />
         </h1>
        </div>
        </div> */}
       


    <main className="text-gray-900 landing-page">


        <section className="p-12 md:pt-32">
            <div className="container mx-auto md:px-8 lg:flex">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="typed-text bangla-title text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                    <ReactTyped strings={["দীপ্ত শিখা সামাজিক সংগঠন ..."]} typeSpeed={100} loop />
                        </h1>
                    <p className="bangla-title text-xl lg:text-2xl mt-6 font-light">
একটি অরাজনৈতিক ও সামাজিক সংগঠন।জে,বি উচ্চ বিদ্যালয়। (মিরসরাই, চট্টগ্রাম)
                    </p>
                    <p className="mt-8 md:mt-12">
                       <Link to="/donation"><button type="button"
                            className=" py-4 px-12 bg-teal-500 hover:bg-teal-600 rounded text-white">Donate</button></Link> 
                    </p>
                    <p className="mt-4 text-gray-600 bangla-title">- হাকিছে ভবিষ্যত, হও আগুয়ান✊
                    </p>
                </div>

                <div className="lg:w-1/2">
                   
                    <img src={LandingHead} alt=""/>
                </div>
            </div>
        </section>


        <div className="bg-blue-100 p-2 flex flex-wrap items-center justify-center">


            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
                <svg className="svg-st absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" >
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" /></svg>
                <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="mini-image-div block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                    </div>

                    <img className="relative w-40" src={volenteer} alt=""/>
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Join us</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Volunteer</span>
                    <Link to="/signup"><span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Go</span></Link>  
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
                <svg className="svg-st absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" >
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" /></svg>
                <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="mini-image-div block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                    </div>

                    <img className="relative w-40" src={sponsor} alt=""/>
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Join us</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Sponsorship</span>
                        <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Go</span>
                    </div>
                </div>
            </div>

            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
                <svg className="svg-st absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform" viewBox="0 0 375 283" fill="none" >
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" /></svg>
                <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="mini-image-div block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                    </div>

                    <img className="relative w-40" src={donation} alt=""/>
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Join us</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Donation</span>

                    <Link to="/donation"><span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Go</span></Link> 
                    </div>
                </div>
            </div>

        </div>

        <div  className="misson">
        <h1>Our Misson</h1>
            <p>
            Provide support to underprivileged section of the society specially extreme poor, homeless and orphan children through quality education, nourishment & shelter to make them resources for the nation.
            </p>
        </div>
        


        <div className="h-54 w-full flex items-center justify-center dark:bg-gray-900">
    
        <div
            className="relative w-full max-w-2xl my-2 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">

            <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
                mission
            </span>

            <div className="w-full flex justify-center sm:justify-start sm:w-auto">
                <img className="object-cover w-20 h-20 mt-3 mr-3 rounded-full" src="https://i.pinimg.com/564x/a5/17/09/a51709893a88477e167b86f6ab71b16f.jpg"/>
            </div>

            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">

                <p className="font-display mb-2 text-2xl font-semibold dark:text-gray-200" >
                    Education
                </p>

                <div className="mb-4 md:text-lg text-gray-400">
                    <p>To become a national treasure by offering free education to children and orphans.</p>
                </div>
            </div>

        </div>
                 
        </div>

        <div className="h-54 w-full flex items-center justify-center dark:bg-gray-900">
    
        <div
            className="relative w-full max-w-2xl my-2 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">

            <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
                mission
            </span>

            <div className="w-full flex justify-center sm:justify-start sm:w-auto">
                <img className="object-cover w-20 h-20 mt-3 mr-3 rounded-full" src="https://i.pinimg.com/564x/a5/17/09/a51709893a88477e167b86f6ab71b16f.jpg"/>
            </div>

            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">

                <p className="font-display mb-2 text-2xl font-semibold dark:text-gray-200" >
                Treatment
                </p>

                <div className="mb-4 md:text-lg text-gray-400">
                    <p>To deliver free medicines and health care to underprivileged people.</p>
                </div>
            </div>

        </div>
                 
        </div>

        <div className="h-54 w-full flex items-center justify-center dark:bg-gray-900">
    
        <div
            className="relative w-full max-w-2xl my-2 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">

            <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
                mission
            </span>

            <div className="w-full flex justify-center sm:justify-start sm:w-auto">
                <img className="object-cover w-20 h-20 mt-3 mr-3 rounded-full" src="https://i.pinimg.com/564x/a5/17/09/a51709893a88477e167b86f6ab71b16f.jpg"/>
            </div>

            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">

                <p className="font-display mb-2 text-2xl font-semibold dark:text-gray-200" >
                    Food
                </p>

                <div className="mb-4 md:text-lg text-gray-400">
                    <p>We want to inspire a nation with food. Best relation can be created through sharing food.</p>
                </div>
            </div>

        </div>
                 
        </div>

    </main>

   
     

</>
    );
};

export default Landing;