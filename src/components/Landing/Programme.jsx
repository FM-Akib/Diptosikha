import { useQuery } from "@tanstack/react-query";
import ProgrammeCard from "./ProgrammeCard";
import axios from "axios";
import { useState } from "react";
import '../../App.css';

const Programme = () => {
  const [programs,setPrograms] = useState([]);
  const [dataLength,setDataLength]=useState(3); 

const { isPending, error} = useQuery({
        queryKey: ['programs'],
        queryFn: () =>
        axios.get('https://diptosikha-server.vercel.app/programs')
            .then(data => {
              setPrograms(data.data);
              return data.data;
            }
            )
      })
    // console.log(programs)




      if (isPending) return <>
      <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
            <span className='sr-only '>Loading...</span>
            <div className='h-8 w-8 bg-green-700 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-8 w-8 bg-green-700 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-8 w-8 bg-green-700 rounded-full animate-bounce'></div>
        </div>
      </>
    
      if (error) return 'An error has occurred: ' + error.message



    return (
        <section className="bg-gray-100 text-gray-800">
            
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="mx-auto md:my-10 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">Our Organized Programme</h1>
            <p className="my-2">We helped people by organizing medical camp and several other unique events.</p>
            </div>     
<div className="Trio-Bangla grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

{
  programs.slice(0,dataLength)?.map(program=> <ProgrammeCard
    key={program._id}
    program = {program}
    ></ProgrammeCard>)
}

                
</div>


<div className={`flex justify-center  ${dataLength===programs.length && 'hidden'}`}>
<button  onClick={()=>setDataLength(programs.length)}  type="button" className="px-6 py-3 text-sm rounded-md hover:bg-gray-600 hover:text-white bg-white text-gray-600 transition-transform">Load more posts...</button>
</div>
</div>
</section>
);
};

export default Programme;