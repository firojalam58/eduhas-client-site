import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../src/images/banner/car3.png'

const Registration = () => {
    const handleSignup = event =>{

    }
    return (
        <div className="hero my-20">
        <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
              <h1 className='text-5xl text-center font-bold'>Registration</h1>
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered"required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
              
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='text-center'>All ready have an account <Link to={'/login'} className=' font-bold text-orange-500'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Registration;