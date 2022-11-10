
import React, { useContext, useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authentication/AuthProvider';

const ServiceDetails = () => {
  const {user} = useContext(AuthContext)

  
  const service = useLoaderData()
  const [active, setActive] = useState(true)
  const {_id, img, price,rating, name,description} = service;

  const handlePlaceOrder= event =>{
    event.preventDefault()
    const form = event.target;
    const fastNames = form.firstName.value;
    const lastNames = form.firstName.value;
    const names = fastNames + ' ' + lastNames;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const photoUrl = form.photoUrl.value;
    const ratings = form.rating.value;

    const reviews = {
      name: names,
      email: email,
      phone: phone,
      message: message,
      photoUrl: photoUrl,
      price: price,
      ratingClient: ratings,
      reviewId: _id,
    }


    fetch('http://localhost:5000/review',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviews)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.acknowledged){
        alert('Review Added Successful')
        form.reset()
      }
      })




  }
  

    return (
         <div className="grid grid-cols-1 gap-3 mt-5 mb-5 md:grid-cols-2 lg:grid-cols-2">
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
      <div className='mt-20 mb-6'>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="number" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" className="input input-ghost w-full  input-bordered"  />
                    <input name="photoUrl" type="text" placeholder="Your photoUrl" className="input input-ghost w-full  input-bordered"  />
                    <input name="rating" type="number" placeholder="Your rating" className="input input-ghost w-full  input-bordered"  />
                    
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn mt-5 btn-primary mb-5' type="submit" value="Please Review" />
            </form>
        </div>
     
        </div>
    );
};

export default ServiceDetails;