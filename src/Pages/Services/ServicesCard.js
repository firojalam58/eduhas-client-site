import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({service}) => {
  const [active, setActive] = useState(true)
    const {_id, img, price, name,description} = service
    return (
      <div>
          <div className="card card-compact max-w-screen mt-5 mb-5 bg-base-100 shadow-xl">

<PhotoProvider>
  <PhotoView  src={img}>
  <figure><img className="cursor-pointer" src={img} alt="image" /></figure>
  </PhotoView>
</PhotoProvider>

  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='text-2xl font-semibold text-primary'>{price}$</p>
    <div>
    {
         active ? <p>{description.length > 100 ? <> {description.slice(0, 100) + "..."} <button className='font-semibold' onClick={() => setActive(!active)}>Read more</button></> :
          description}</p>
            : 
            <p>{description} <button className='font-semibold' onClick={() => setActive(!active)}> Read Less </button></p>
      }
    </div>
    <div className="card-actions justify-end">
     
      <Link to={`/details/${_id}`}>
       <button className="btn btn-primary">Check Out</button>
      </Link>
    </div>
  </div>


</div>

      </div>
      
    );
};

export default ServicesCard;