import React from 'react';
import HeroBanner from '../../../components/sections/HeroBanner'
import BrowseByCategory from '../../../components/sections/BrowseByCategory';
import CareerHighlight from '../../../components/sections/CareerHighlight';
import StatsSection from '../components/StatsSection';

const Home = () => {
    return (
        <div className=''>
        <HeroBanner/>
        <BrowseByCategory/>
        <CareerHighlight/>
        <StatsSection/>
        </div>
    );
};

export default Home;