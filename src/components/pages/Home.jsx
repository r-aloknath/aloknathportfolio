import React from 'react'
// import codeImg from '../../assets/img/code.png'
import nextJsLogo from '../../assets/img/nextjs.svg'
import mysqlLogo from '../../assets/img/mysql-svgrepo-com.svg'
export default function Home() {
  return (
    <>
      <div className='bg-[#212526] flex flex-col mt-5 mb-5 px-8 py-4 rounded-md border-2 border-[#2a2e2e]'>
        <div className="intro">
          <div className="flex mt-3">
            <span className='square-marker'></span>
          <p className='text-[#8b9f9f] mb-3'>Hello! There I'm <span className='text-[#56b887] mb-5'>Aloknath Rath</span></p>
          </div>
          <div className='grid grid-cols-12'>
            <h3 className='text-4xl md:text-5xl col-span-12 md:col-span-8 text-white leading-[40px] md:leading-[55px]'>I'm making <span className='text-[#56b887]'>product</span> that makes you and your <span className='text-[#56b887]'>business WoW!</span></h3>
            <div className="hidden md:visible md:col-span-4"></div>
          </div>
        </div>
        <div className="contact mt-10 mb-5 grid grid-cols-12 ">
          <p className='text-xl md:text-2xl text-white col-span-12 md:col-span-6 text-left mb-3 md:mb-0'><i className="fa-regular fa-envelope text-[#56b887]"></i><a href="mailto:aloknath.ar@gmail.com" className='decoration-none ms-3'>aloknath.ar@gmail.com</a></p>
          <p className='text-xl md:text-2xl md:ms-5 text-white  col-span-12 md:col-span-6 text-left'><i className="fa-solid fa-phone text-[#56b887] me-3"></i>+91-7749927175</p>
        </div>

        {/* <div className="code-img">
        <img src={codeImg} alt="" />
      </div> */}
      </div>

      <div className="stats w-[100%] grid grid-cols-12 bg-[#212526] mt-5 mb-5 px-8 py-8 rounded-md border-2 border-[#2a2e2e]">
          <div className="col-span-6 md:col-span-3 mb-3 md:mb-0">
            <p className='text-3xl font-bold text-[#56b887]'>100k+</p>
            <p className='text-base font-semibold text-[#fff]'>Lines of code</p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className='text-3xl font-bold text-[#56b887]'>2.5+</p>
            <p className='text-base font-semibold text-[#fff]'>Years of experience</p>
          </div>
          <div className="col-span-6 md:col-span-3 mb-3 md:mb-0">
            <p className='text-3xl font-bold text-[#56b887]'>12</p>
            <p className='text-base font-semibold text-[#fff]'>Live project exp</p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className='text-3xl font-bold text-[#56b887]'>5+</p>
            <p className='text-base font-semibold text-[#fff]'>Technologies</p>
          </div>
        </div>

      <div className="experties grid grid-cols-12 bg-[#212526] mt-5 mb-5 px-8 py-8 rounded-md border-2 border-[#2a2e2e]">
        <div className="col-span-6 md:col-span-3 flex flex-col items-center mb-5">
          <i class="fa-brands fa-angular text-[#56b887] text-6xl md:text-7xl"></i>
          <p className='text-[#8b9f9f] text-sm md:text-lg mt-5'>ANGULR</p>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col items-center mb-5">
          <i class="fa-brands fa-react text-[#56b887]  text-6xl md:text-7xl"></i>
          <p className='text-[#8b9f9f] text-sm md:text-lg mt-5'>REACT/REACT NATIVE</p>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col items-center mb-5">
          <img src={nextJsLogo} alt="" className='h-14 md:h-20'/>
          <p className='text-[#8b9f9f] text-sm md:text-lg mt-5'>NET.js</p>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col items-center mb-5">
          <i class="fa-brands fa-node text-[#56b887]  text-6xl md:text-7xl"></i>
          <p className='text-[#8b9f9f] text-sm md:text-lg mt-5'>NODE JS</p>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col items-center mb-5">
          <i class="fa-brands fa-laravel text-[#56b887]  text-6xl md:text-7xl"></i>
          <p className='text-[#8b9f9f] text-sm md:text-lg mt-5'>LARAVEL</p>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col items-center mb-5">
          <img src={mysqlLogo} alt="" className='h-16 md:h-20'/>
          <p className='text-[#8b9f9f] text-sm md:text-lg mt-5'>MYSQL</p>
        </div>
      </div>
    </>
  )
}
