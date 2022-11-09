import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const service = useLoaderData()
    console.log(service);
    const {_id, img, price, name,description} = service
    return (
        <div className='mt-5 mb-5'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <h2>This is Service{name}</h2>
        </div>
    );
};

export default ServiceDetails;