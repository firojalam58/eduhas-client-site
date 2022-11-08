import React from 'react';
import About from '../About/About';
import Team from '../Team/Team';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Team></Team>
        </div>
    );
};

export default Home;