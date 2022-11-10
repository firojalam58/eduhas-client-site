import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
   const storedUser = useLoaderData();
   const [user, setUser] = useState(storedUser);
   const navigate = useNavigate();


   const handleUpdate = (event) => {
      event.preventDefault();
      fetch (`https://assignment11-server-site-murex.vercel.app/reviews/${storedUser._id}`,{
         method: 'PATCH',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(user)

      })
         .then(res => res.json())
         .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Update Successfully Sir')
                navigate('/review')
            }
           console.log(data);
         })
         .catch(err => {
            console.error(err);
            toast.error(err, { autoClose: 2000 })
         })
   }

   const handleChange = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      const newUser = { ...user };
      newUser[field] = value;
      setUser(newUser);
   }

   return (
      <div className='dark:bg-gray-200 mt-[-10px]'>
         <div className='container pt-5 mx-auto'>
            <div className="card w-1/2 mx-auto lg:card-side bg-base-100 shadow-2xl p-2 lg:p-3">
               <figure><img className='w-full lg:w-64 rounded-lg' src={storedUser.img} alt="Album" /></figure>
               <div className="card-body">
                  <h2 className="card-title text-2xl lg:text-2xl font-semibold text-gray-600">{storedUser.name}</h2>
                  <div>
                     <p>Rating: {storedUser.ratingClient} <FaStar className='inline ml-1 text-warning mt-[-3px]'></FaStar></p>
                     <p>{ }</p>
                  </div>
                  <div className="card-actions justify-start lg:justify-end">
                     <button className="btn btn-primary lowercase text-lg">{storedUser.email}</button>
                  </div>
               </div>
            </div>
            <form className='flex flex-col w-1/2 mx-auto' onSubmit={handleUpdate}>
               <input onChange={handleChange} type="text" name='name' placeholder="Your Name..." className="input input-bordered w-full my-5 text-lg font-semibold" defaultValue={`${''}`} />
               <textarea onChange={handleChange} name='message' className="textarea textarea-bordered mb-5 text-lg font-semibold" placeholder="What's Your mind" defaultValue={`${''}`}></textarea>
               <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-5">Save</button>
            </form>
         </div>
      </div>
   );
};

export default Edit;