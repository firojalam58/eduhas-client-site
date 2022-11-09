
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const service = useLoaderData()
    const [active, setActive] = useState(true)
    const {_id, img, price, name,description} = service
    return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="card card-compact max-w-screen mt-5 mb-5 bg-base-100 shadow-xl">
        <figure><img src={img} alt="image" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className='text-2xl font-semibold text-primary-500'>{price}$</p>
          <div>
          {
               active ? <p>{description.length > 100 ? <> {description.slice(0, 100) + "..."} <button className='font-semibold' onClick={() => setActive(!active)}>Read more</button></> :
                description}</p>
                  : 
                  <p>{description} <button className='font-semibold' onClick={() => setActive(!active)}> Read Less </button></p>
            }
          </div>
         
        </div>
      
      </div>
      <div className=" m-0-auto justify-center">
           
           <Link to={'/review'}>
            <button className="btn btn-primary">Review</button>
           </Link>
         </div>
        </div>
    );
};

export default ServiceDetails;