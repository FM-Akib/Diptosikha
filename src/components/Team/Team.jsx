
import Teamperson from '../Teamperson/Teamperson';
import './Team.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const Team = () => {
    // const teams = useLoaderData();

    const { isPending, error, data:team } = useQuery({
        queryKey: ['teams'],
        queryFn: () =>
        
        axios.get('http://localhost:5000/users')
            .then(data => {return data.data;}
            )
      })
    //  console.log(teams)
    const teams = team.filter(t=>t.designation!=='');
     

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
        <div>
            <div className="teams-container md:grid md:grid-cols-3 ">
                {
                    teams?.map(team=><Teamperson
                    key={team.id}
                    person={team}
                    ></Teamperson>)
                }
            </div>
        </div>
    );
};

export default Team;