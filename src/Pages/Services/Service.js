import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data))
      },[])



    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             {
                service.map(service=> <ServicesCard
                key={service._id}
                service={service}

                ></ServicesCard>
                
                )
            }
        </div>
    );
};

export default Service;