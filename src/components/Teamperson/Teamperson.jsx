import { Link } from "react-router-dom";

// import teamBack from '../../assets/team/team_back.png';
const Teamperson = ({person}) => {
    const {name,designation,img,bloodGroup,mobile,education,facebook}=person;

//    console.log(facebook);

    return (
       

        <div
            className="mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src="https://i.ibb.co/cvLHx2F/Untitled-design-3.png" alt='Mountain'/>
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center h-32" src={img} alt='Woman looking front'/>
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">{name}</h2>
                <p className="text-gray-500">{designation}</p>
            </div>
            <ul className="py-4 mt-2 text-gray-700 flex-col  items-center justify-around">
                <li className="flex flex-col items-center justify-around">
                    <div>Blood Group: <span className="text-red-600">{bloodGroup}</span></div>
                </li>
                <li className="flex flex-col items-center justify-between">
                    <div>Mobile: <span className="text-gray-900">{mobile}</span></div>
                </li>
                <li className="flex flex-col items-center justify-around">
                    
                    <div>{education}</div>
                </li>
            </ul>
            <div className="p-4 border-t mx-8 mt-2">
                <Link to={facebook}>
                <button className="w-1/2 block mx-auto rounded-full bg-blue-800 hover:shadow-lg font-semibold text-white px-6 py-2">Contact</button> </Link>
            </div>
        </div>
    );
};

export default Teamperson;