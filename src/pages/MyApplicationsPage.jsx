import React from 'react';
import { useLoaderData } from 'react-router';
import { HiOutlineCollection } from 'react-icons/hi';
import ApplicationCard from '@/features/application/components/ApplicationCard';

const MyApplicationsPage = () => {
    const { applications } = useLoaderData();

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 bg-gradient-to-r from-primary to-secondary p-8 rounded-3xl text-primary-content shadow-2xl">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight">Application Tracker</h1>
                    <p className="opacity-90 mt-2 font-medium">You have submitted {applications?.length} applications so far.</p>
                </div>
                <div className="stat bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 w-auto">
                    <div className="stat-title text-white">Total Records</div>
                    <div className="stat-value text-white">{applications?.length}</div>
                </div>
            </div>

            {/* List Container */}
            <div className="space-y-6">
                {applications?.length > 0 ? (
                    applications.map((app, index) => (
                        <ApplicationCard 
                            key={app._id.$oid} 
                            application={app} 
                            index={index} 
                        />
                    ))
                ) : (
                    <div className="alert alert-info shadow-lg">
                        <HiOutlineCollection className="text-2xl" />
                        <span>No applications found in your history.</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyApplicationsPage;