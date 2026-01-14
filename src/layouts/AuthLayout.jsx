import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
             auth 
             <Outlet/>
        </div>
    );
};

export default AuthLayout;