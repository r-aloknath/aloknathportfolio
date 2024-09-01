import React from 'react'
import logo from '../../assets/img/anr-logo.png'
import { toggle } from '../../features/toogleMobileSideNavSlice';
import { useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <div className='bg-[#212526] flex flex-row items-center justify-between mb-5 px-8 py-4 rounded-md border-2 border-[#2a2e2e]'>
        <div className=''>
          <img src={logo} alt="" className='h-11' />
        </div>
        <div className=''>
          <span className='text-[#8b9f9f] hover:text-white font-bold me-8 hidden md:inline'> Home</span>
          <span className='text-[#56b887] font-bold me-8 hidden md:inline'> Hire Me!</span>
          <div className='bg-[#212526] rounded-md border-2 border-[#2a2e2e] text-3xl text-[#8b9f9f] cursor-pointer flex items-center justify-center float-right lg:hidden' onClick={()=>dispatch(toggle())}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </>
  )
}
