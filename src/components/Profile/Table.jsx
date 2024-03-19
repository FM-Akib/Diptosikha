import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Table = () => {

    const { isPending, error,data:donations} = useQuery({
        queryKey: ['donations'],
        queryFn: () =>
        axios.get('http://localhost:5000/donations')
            .then(data => {
            //   setPrograms(data.data);
              return data.data;
            }
            )
      })
console.log(donations);




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
        <table className="min-w-full divide-y divide-gray-200  ">
    <thead>
        <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment On</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        
        {
            donations?.map(donation => <>
            <tr>
            <td className="px-6 py-4 whitespace-nowrap">{donation.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{donation.mobile}</td>
            <td className="px-6 py-4 whitespace-nowrap">{donation.paymentOn}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{donation.amount}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
            </td>
        </tr>
            </>)
        }
       
    </tbody>
</table>
    );
};

export default Table;