import Loading from '@/components/common/Loading';
import useAuth from '@/features/auth/hooks/useAuth';
import React from 'react';

const MyJobPostsPage = () => {
    const { loading} = useAuth();
    if (loading) return <Loading/>;
    return (
        <div>
            MyjobPostsPage
        </div>
    );
};

export default MyJobPostsPage;