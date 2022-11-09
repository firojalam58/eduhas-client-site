import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const Review = () => {
    const [reviews, setReviews]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then (data => {
            setReviews(data)
        })
    },[])
    return (
        <div className='mt-5 mb-5'>
            {
                reviews.map(review => <Reviews
                key={review._id}
                reviews= {reviews}
                ></Reviews>)
            }
        </div>
    );
};

export default Review;