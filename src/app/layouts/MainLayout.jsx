import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';

const MainLayout = () => {
    return (
        <div>
            <Header/>
             <main className=''>
                   <Outlet/>
             </main>
             <Footer/>
        </div>
    );
};

export default MainLayout;