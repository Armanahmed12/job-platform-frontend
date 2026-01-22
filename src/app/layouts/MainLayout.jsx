import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/layouts/Footer';
import Navbar from '../../components/layouts/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
             <div className=''>
                   <Outlet/>
             </div>
             <Footer/>
        </div>
    );
};

export default MainLayout;