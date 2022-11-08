import React from 'react';

const BannerSlider = ({slider}) => {
    const { image, prev, id, next } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-1/3 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Best <br />
          Match To Night
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-1/3 top-1/2">
        <p className="text-xl text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5  left-1/4 top-3/4">
        <div className='text-center'>
        <button className="btn btn-warning mr-5">Our Services</button>
        </div>
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