import React from 'react';

const Reviews = ({review}) => {
    const {_id,email,phone,name,message,ratingClient,photoUrl } = review
    return (
      <div className="card w-33 bg-base-100 shadow-xl">
      <figure><img src={photoUrl} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-primary">
        Name: {name}
        </h2>
        <h5 className="card-title font-bold"> Ratings: {ratingClient}Star</h5>
        <p>Email:{email}</p>
        <p className='text-2xl '>Message this client:{message}</p>
      </div>
    </div>
    );
};

export default Reviews;