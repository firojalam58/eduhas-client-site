import React from 'react';

const Reviews = ({reviews}) => {
    const [{_id,email,phone,message,rating,photoUrl }] = reviews
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              <div className="card card-compact max-w-screen mt-5 mb-5 bg-base-100 shadow-xl">
        <figure><img src={photoUrl} alt="image" /></figure>
        <div className="card-body">
          <h2 className="card-title">{message}</h2>
          <p className='text-2xl font-semibold text-primary-500'>{email}</p>
          <p className='text-2xl font-semibold text-primary-500'>Phone:{phone}</p>
          <p className='text-2xl font-semibold text-primary-500'>{rating}star</p>
          <div>
          
          </div>
        </div>
      </div>
        </div>
      
    );
};

export default Reviews;