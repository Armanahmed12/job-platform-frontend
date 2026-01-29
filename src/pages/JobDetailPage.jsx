import JobDetails from '@/features/job/components/JobDetails';
import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetailPage = () => {
    const {data : jobData} = useLoaderData();
    return (
        <div>
             <JobDetails jobData={jobData}/>
        </div>
    );
};

export default JobDetailPage;