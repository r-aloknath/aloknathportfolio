import React from 'react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='bg-[#212526] flex flex-row items-center justify-between px-8 py-4 rounded-md border-2 border-[#2a2e2e]'>
      <p className='text-[#8b9f9f] font-semibold text-sm md:text-base'>Copyright: © 2024 <span className='text-[#56b887]'>ANR</span>. All Rights Reserved.</p>
      <i className="fa-solid fa-arrow-up text-[#8b9f9f] hover:text-white cursor-pointer" onClick={()=>scrollToTop()}></i>
    </div>
  )
}
