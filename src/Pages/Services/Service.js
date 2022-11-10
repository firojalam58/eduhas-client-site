import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data))
      },[])



    return (
     <div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             {
                service.map(service=> <ServicesCard
                key={service._id}
                service={service}

                ></ServicesCard>
                
                )
            }
            
        </div>
        <div className='text-center mt-5 mb-5'>
             <button  className='btn btn-primary'> <Link to='/serviceAdd'>Add Service</Link></button>
            
            </div>
        </div>
       
    );
};

export default Service;