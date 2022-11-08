import React from 'react';
import BannerSlider from './BannerSlider';
import img1 from '../../../images/banner/slider-1.jpg';
import img2 from '../../../images/banner/slider-2.jpg';
import img3 from '../../../images/banner/slider-3.jpg';
import './Banner.css'

const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    },
  
  ]











const Banner = () => {
    return (
        <div className="carousel w-full py-10">
              {
                bannerData.map(slider => <BannerSlider
                key={slider.id}
                slider={slider}
                ></BannerSlider>)
              }
  </div>
    );
};

export default Banner;