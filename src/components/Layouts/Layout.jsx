import React from 'react'
import Header from './Header'
import RightBar from './RightBar';
import LeftBar from './LeftBar';
import Footer from './Footer'
import MobileRightBar from './MobileRightBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='w-100 h-100 grid grid-cols-12 p-6 md:p-4 gap-x-4'>
            <div className='hidden md:block md:col-span-4 lg:col-span-3'>
                <LeftBar />
            </div>
            <div className='col-span-12 md:col-span-8'>
                <div className='sticky top-0 z-10'>
                    <Header />
                </div>
                <div className='block md:hidden md:col-span-4 lg:col-span-3'>
                    <LeftBar />
                </div>
                <Outlet />
                <div className='mt-5'>
                    <Footer />
                </div>
            </div>
            <MobileRightBar/>
            <div className='hidden lg:block md:col-span-1'>
                <RightBar />
            </div>
        </div>
    )
}
