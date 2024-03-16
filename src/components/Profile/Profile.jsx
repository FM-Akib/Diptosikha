import '../../App.css'
const Profile = () => {
    return (
        <div className="md:w-[90%]  mx-auto interfont">
           <div className="">
    <div className=" mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-white rounded-full mb-4 shrink-0">

                        </img>
                        <h1 className="text-xl font-bold">John Doe</h1>
                        <p className="text-gray-700">Software Developer</p>
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                            <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                        </div>
                    </div>
                    <hr className="my-6 border-t border-gray-300"/>
                    <div className="flex flex-col">
                        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Personal Information</span>
                        <ul>
                            <li className="mb-2">Email - </li>
                            <li className="mb-2">Contact - </li>
                            <li className="mb-2">Blood Group - </li>
                            <li className="mb-2">Last Donated - </li>
                            <li className="mb-2">Address - </li>
                        </ul>
                    </div>
                </div>
            </div>













            <div className="col-span-4 sm:col-span-9 ">
                <div className="bg-white shadow-lg rounded-lg p-6">
                     <div className="w-full  space-y-6 text-gray-600 ">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Edit your account</h3>
                        <p className="">You can change your account information.</p>
                    </div>
                </div>

                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form onSubmit={(e) => e.preventDefault()}
                        className="space-y-5">

                        <div className="md:grid md:grid-cols-2 md:gap-4 ">
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-4 ">
                        <div>
                            <label className="font-medium">
                                Image
                            </label>
                            <input type="file" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-4 ">
                        <div>
                            <label className="font-medium">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Blood Group
                            </label>
                            <input type="text" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                        </div>
                        
                        <div className="md:grid md:grid-cols-2 md:gap-4 ">
                        <div>
                            <label className="font-medium">
                               Last Donated
                            </label>
                            <input type="date" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                        <div>
                            <label className="font-medium">
                                Education Institute
                            </label>
                            <input type="text" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                        </div>
                         
                         <div className="md:grid md:grid-cols-2 md:gap-4 ">
                         <div>
                            <label className="font-medium">
                                Facebook URL
                            </label>
                            <input type="text" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                        <div>
                            <label className="font-medium">
                                Contact
                            </label>
                            <input type="number" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                         </div>
                        
                        <div>
                            <label className="font-medium">
                                Address
                            </label>
                            <input type="text" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>


                        <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">Update account</button>
                    </form>
                    
                </div>
            </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Profile;