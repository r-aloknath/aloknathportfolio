import React from 'react'
import pimage from '../../assets/img/pimg.jpeg'
export default function LeftBar() {
  return (
    <div className='bg-[#212526] px-8 pt-10 pb-20 rounded-md border-2 border-[#2a2e2e] flex flex-col items-center h-full'>
      <div className='mb-10 relative'>
        <img className='rounded-md' src={pimage} alt="" />
        <div className='absolute h-6 w-14 bg-[#56b887] -right-2 -bottom-5 rounded-md flex items-center justify-center text-white text-center font-semibold text-xs'>Years</div>
        <div className='absolute h-8 w-8 bg-[#1f92ed] right-8 -bottom-2 rounded-[50%] flex items-center justify-center text-white text-right font-semibold'>3</div>
      </div>
      <div className='mb-10'>
        <h3 className='text-[32px] font-bold text-white text-center'>Aloknath Rath</h3>
        <p className='text-[#8b9f9f] text-center'>Full Stack Developer</p>
      </div>
      <div className="mb-10 w-[100%]">
        <span className='block bg-[#56b887] px-9 py-4 text-center text-white font-bold w-100 rounded-md cursor-pointer mb-3'>Hire Me!</span>
        <span className='block px-9 py-4 text-center text-white font-bold w-100 rounded-md cursor-pointer bg-transparent border-2 border-[#2a2e2e] hover:border-[#56b887] hover:bg-[#56b887] '>Download CV</span>
      </div>
      <div className='mb-10'>
        <h3 className='text-center w-100 text-[#8b9f9f] text-[24px] font-semibold'>Specializing in strategy, improving design maturity & design systems.</h3>
      </div>
      <div className="flex flex-row items-center justify-evenly w-[100%]">
        <a href='https://www.linkedin.com/in/aloknath-rath?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel="noreferrer" className='h-12 w-12 text-[#656565] border-2 border-[#2a2e2e] text-2xl flex items-center justify-center rounded-md hover:bg-[#56b887]'>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href='https://github.com/r-aloknath' target='_blank' rel="noreferrer" className='h-12 w-12 text-[#656565] border-2 border-[#2a2e2e] text-2xl flex items-center justify-center rounded-md hover:bg-[#56b887]'>
          <i className="fa-brands fa-github"></i>
        </a>
        <a href='https://www.instagram.com/aloknath.dev?igsh=MWRoNnFsMWF5bzA1bg==' target='_blank' rel="noreferrer" className='h-12 w-12 text-[#656565] border-2 border-[#2a2e2e] text-2xl flex items-center justify-center rounded-md hover:bg-[#56b887]'>
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href='https://x.com/AloknathRath' target='_blank' rel="noreferrer" className='h-12 w-12 text-[#656565] border-2 border-[#2a2e2e] text-2xl flex items-center justify-center rounded-md hover:bg-[#56b887]'>
        <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </div>
  )
}
