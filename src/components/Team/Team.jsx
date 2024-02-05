import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Teamperson from '../Teamperson/Teamperson';
import './Team.css';
const Team = () => {
    const teams = useLoaderData();
    return (
        <div>
            <div className="teams-container md:grid md:grid-cols-3 ">
                {
                    teams.map(team=><Teamperson
                    key={team.id}
                    person={team}
                    ></Teamperson>)
                }
            </div>
        </div>
    );
};

export default Team;