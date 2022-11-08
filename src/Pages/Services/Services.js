import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);
    const [size, setSize] = useState(3);
    useEffect( ()=>{
      fetch(`http://localhost:5000/services?size=${size}`)
      .then(res => res.json())
      .then(data => setServices(data.result))
    },[size])
    return (
        <div>
           <div className='text-center mb-4 pt-6 pb-6'>
                <h2 className="text-5xl font-semibold text-primary">Our Service Area</h2>
                <p className='mt-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service=> <ServicesCard
                key={service._id}
                service={service}
                ></ServicesCard>)
            }
            </div>

            {
                services.length == 6 ?
                <></>
                :
                <button className='btn btn-primary mt-5 mb-5' onClick={ ()=> setSize(6)}>See All</button>
            }
            


            {/* <Link  className='btn btn-secondary' onClick={() => setSize(size + 3)}>Show More Services</Link> */}
        </div>
    );
};

export default Services;