import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
