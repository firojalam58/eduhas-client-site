import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../src/images/about/car2.png'
const About = () => {
    return (

<div>
  <div>
    <h2 className='text-6xl text-primary pt-5 pb-5'>About Us</h2>
  </div>
<div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold"> Get Started My  Official News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to={'/service'}><button className="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
            <h1 className="text-5xl font-bold">Get Started Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to={'/service'}><button className="btn btn-primary">Get Started</button></Link>
          </div>
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          
        </div>
      </div>
</div>
    );
};

export default About;