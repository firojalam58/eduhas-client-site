import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
  const [active, setActive] = useState(true)
    const {_id, img, price, title,description} = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="image" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-2xl font-semibold text-orange-500'>{price}</p>
          <p>
          {
               active ? <p>{description.length > 100 ? <> {description.slice(0, 100) + "..."} <button className='font-semibold' onClick={() => setActive(!active)}>Read more</button></> : description}</p>
                  : <p>{description} <button className='font-semibold' onClick={() => setActive(!active)}> Read Less </button></p>
            }
          </p>
          <div className="card-actions justify-end">
           
            <Link to={`checkout/${_id}`}>
             <button className="btn btn-primary">Check Out</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;