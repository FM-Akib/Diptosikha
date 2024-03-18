import { useContext } from 'react';
import '../../App.css'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import BlogEdit from './BlogEdit';
import Table from './table';
const notify_passNM = () => toast.error("Password and Confirmed not matched!")
const notify_update = () => toast.success('Update successful! Please Reload!');




const Profile = () => {
    const {user} = useContext(AuthContext);
    const users = useLoaderData();

    const userProfile = users.find(u=>u.email ===user.email)
    const {_id,name,designation,email,password,mobile,bloodGroup,img,facebook,address,education,lastDonate} = userProfile;

// console.log(userProfile);

    const handleUserUpdated=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const mobile = form.mobile.value;
        const email = form.email.value;
        const password = form.password.value;
        const bloodGroup = form.bloodGroup.value;
        // const donationOn = form.querySelector('select').value;
        const facebook = form.facebook.value;
        const address = form.address.value;
        const education = form.education.value;
        const lastDonate = form.lastDonate.value;
        const Newpassword = form.Newpassword.value;


        const form2= new FormData(e.target);
        const img = form2.get('image');
        

        if(password!==Newpassword) {
            notify_passNM();
            return;
        }

        const data = new FormData();
        data.append("image",img);

        
        
        fetch('https://api.imgbb.com/1/upload?key=68df54b3a756703bfa8633e5fbc95347',{
            method: 'POST',
            body: data,
        })
        .then(response =>response.json())
        .then(data =>{
            const img=data.data.url;
            // console.log(img2);
            const Newuser ={name,email,password,mobile,bloodGroup,img,facebook,address,education,lastDonate};
            // console.log(Newuser);


        axios.put(`http://localhost:5000/users/${_id}`,Newuser)
        .then(data => {
        
        if(data.data.acknowledged){
            notify_update();}
            }
        )
        
        } 
        );
       
        
        // const Newuser ={name,email,password,mobile,bloodGroup,img,facebook,address,education,lastDonate};
        

       
         
        
    }



    return (

        <>
        <Toaster /> 
 
        <div className="md:w-[90%]  mx-auto interfont">
            
        <div className="">
        <div className=" mx-auto py-8 ">
            
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 ">
            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <img src={img?img:'https://i.ibb.co/4ZdWfbc/Untitled-design.png'} alt="profile photo" className="w-32 h-32 bg-white cover rounded-full mb-4 shrink-0">

                        </img>
                        <h1 className="text-xl font-bold">{name}</h1>
                        <p className="text-gray-700">{designation}</p>
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                            <Link to={facebook} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</Link>
                            <Link to={facebook} className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Message</Link>
                        </div>
                    </div>
                    <hr className="my-6 border-t border-gray-300"/>
                    <div className="flex flex-col">
                        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Personal Information</span>
                        <ul>
                            <li className="mb-2"><span className='font-bold'>Email</span> - <span className="text-green-700">{email}</span></li>
                            <li className="mb-2"><span className='font-bold'>Contact</span> - <span className="text-green-700">{mobile}</span></li>
                            <li className="mb-2"><span className='font-bold'>Blood Group</span> - <span className="text-green-700">{bloodGroup}</span></li>
                            <li className="mb-2"><span className='font-bold'>Last Donated</span> - <span className="text-green-700">{lastDonate}</span></li>
                            <li className="mb-2"><span className='font-bold'>Address</span> - <span className="text-green-700">{address}</span></li>
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
                    <form onSubmit={handleUserUpdated}
                        className="space-y-5">

                        <div className="md:grid md:grid-cols-2 md:gap-4 ">
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                defaultValue={name}
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
                                name="email"
                                defaultValue={email}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-4 ">
                        <div>
                            <label className="font-medium">
                                Image
                            </label>
                            <input name="image" type="file" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                defaultValue={password}
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
                                name="Newpassword"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Blood Group
                            </label>
                            <input name="bloodGroup" defaultValue={bloodGroup} type="text" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                        </div>
                        
                        <div className="md:grid md:grid-cols-2 md:gap-4 ">
                        <div>
                            <label className="font-medium">
                               Last Donated
                            </label>
                            <input name="lastDonate" defaultValue={lastDonate} type="date" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                        <div>
                            <label className="font-medium">
                                Education Institute
                            </label>
                            <input name="education" defaultValue={education} type="text" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                        </div>
                         
                         <div className="md:grid md:grid-cols-2 md:gap-4 ">
                         <div>
                            <label className="font-medium">
                                Facebook URL
                            </label>
                            <input name='facebook' defaultValue={facebook} type="text" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                        <div>
                            <label className="font-medium">
                                Contact
                            </label>
                            <input name="mobile" defaultValue={mobile} type="number" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>
                         </div>
                        
                        <div>
                            <label className="font-medium">
                                Address
                            </label>
                            <input name="address" defaultValue={address} type="text" className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
                        </div>


                        <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">Update account</button>
                    </form>
                    
                </div>
            </div>
                    
                </div>
            </div>

           

        </div>
         
        <div className="md:grid grid-cols-12">
        <div className="col-span-4">
        <BlogEdit></BlogEdit>
        </div>
        <div className="col-span-8 md:mt-20">
        <h1 className="text-3xl font-bold text-center py-6">Donations List</h1>
        <Table></Table>
        </div>
        </div>
    </div>
    </div>
    </div>
        </>
    );
};

export default Profile;