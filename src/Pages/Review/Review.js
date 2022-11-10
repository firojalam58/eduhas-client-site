import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const Review = () => {
    const [reviews, setReviews]= useState([])
    useEffect(()=>{
        fetch('https://assignment11-server-site-murex.vercel.app/reviews')
        .then(res => res.json())
        .then (data => {
            setReviews(data)
        })
    },[])
    return (
        <div className='mt-5 mb-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reviews.map(review => <Reviews
                key={review._id}
                review= {review}
                ></Reviews>)
            }
        </div>
    );
};

export default Review;