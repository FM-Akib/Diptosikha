import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BloodCard from '../BloodCard/BloodCard';
import './Bloodbank.css';

const BloodBank = () => {
    const bloodBanks = useLoaderData();
    console.log(bloodBanks);
    return (
        <div>
            <div className="blood-container">
            {
                bloodBanks.map((blood=><BloodCard
                 key={blood.id}
                 blood={blood}
                ></BloodCard>))
            }
            </div>
        </div>
    );
};

export default BloodBank;