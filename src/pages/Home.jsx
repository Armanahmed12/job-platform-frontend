import React from 'react';
import HeroBanner from '../features/home/components/HeroBanner';
import CareerHighlight from '../features/home/components/CareerHighlight';
import BrowseByCategory from '../features/home/components/BrowseByCategory';
import StatsSection from '../features/home/components/StatsSection';
import JobsContainer from '@/features/job/components/JobsContainer';

const Home = () => {
    return (
        <div className=''>
        <HeroBanner/>
        <BrowseByCategory/>
        <CareerHighlight/>
        <JobsContainer/>
        <StatsSection/>
        </div>
    );
};

export default Home;