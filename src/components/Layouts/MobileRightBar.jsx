import React from 'react'
import { useSelector } from 'react-redux';
import logo from '../../assets/img/anr-logo.png';
import { toggle } from '../../features/toogleMobileSideNavSlice';

import { useDispatch } from 'react-redux';

export default function MobileRightBar() {
    const isOpen = useSelector((state) => state.mobileNavToggle.isOpen);
    const dispatch = useDispatch();

    return (
        <div className={`fixed right-0 top-0 h-[100vh] w-[100vw] bg-[#ffffff21] mobile-sidebar z-[11] ${isOpen ? 'open' : ''}  visible lg:hidden`}>
            <div className='h-[100vh] w-[250px] sm:w-[400px] bg-[#222525] float-right'>
                <div className="flex flex-row justify-between items-center p-3">
                    <img src={logo} alt="" className='h-8' />
                    <div className='p-2 bg-[#56b887] rounded-md' onClick={() => dispatch(toggle())}>
                        <span className="close-mark cursor-pointer" ></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
