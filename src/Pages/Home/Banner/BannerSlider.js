import React from 'react';
import { Link } from 'react-router-dom';

const BannerSlider = ({slider}) => {
    const { image, prev, id, next } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-1/4 top-1/3">
        <h1 className="lg:text-6xl text-xxl  font-bold text-white">
          Welcome My<br />
          Sports Photography 
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-1/3 top-1/2">
        
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 lg:top-[400px] lg:left-[220px] top-[100px] left-[100px] ">
   
      <Link to={'/service'}><button className="btn btn-warning mr-5">Our Services</button></Link>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    );
};

export default BannerSlider;