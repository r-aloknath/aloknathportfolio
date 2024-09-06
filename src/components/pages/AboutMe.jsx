import React from 'react'
import underLine from '../../assets/img/line.svg'

export default function AboutMe() {
    return (
        <>
            <div className='bg-[#212526] flex flex-col mt-5 mb-5 px-8 py-4 rounded-md border-2 border-[#2a2e2e]'>
                <div className="intro text-center md:text-left" data-aos='fade-up' data-aos-duration='1500'>
                    <div className="flex flex-col md:flex-row mt-3">
                        <span className='square-marker mb-3 md:mb-0'></span>
                        <p className='text-[#8b9f9f] mb-3'>About the <span className='text-[#56b887] mb-5'>Me </span></p>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-12">
                            <h3 className='text-4xl md:text-5xl text-white leading-[40px] md:leading-[55px]'>Hire the<br /> <span className='text-[#56b887]'>best Web Freelancer </span> <br /> for you and your online presence</h3>
                            <div className="flex justify-center md:justify-start">
                                <img src={underLine} alt="" className='mt-4' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-5"></div>
                    <div className="col-span-12 md:col-span-7"></div>
                </div>
                <div className="grid grid-cols-12 mt-10">
                    <div className="col-span-12 md:col-span-6 mt-7 md:mt-0 text-center md:text-left">
                        <p className='text-xl font-bold text-white uppercase'>name</p>
                        <p className='text-base font-semibold text-[#8b9f9f] mt-1 cursor-pointer'>Aloknath Rath</p>
                    </div>
                    <div className="col-span-12 md:col-span-6 mt-7 md:mt-0 text-center md:text-left">
                        <p className='text-xl font-bold text-white uppercase'>office</p>
                        <p className='text-base font-semibold text-[#8b9f9f] mt-1  cursor-pointer'>LP-104, Bhubaneswar, Odisha</p>
                    </div>
                    <div className="col-span-12 md:col-span-6 mt-7  text-center md:text-left">
                        <p className='text-xl font-bold text-white uppercase'>Phone</p>
                        <a href='tel:+917749927175' className='text-base font-semibold text-[#8b9f9f] mt-1  cursor-pointer'>+91-7749927175</a>
                    </div>
                    <div className="col-span-12 md:col-span-6  mt-7  text-center md:text-left">
                        <p className='text-xl font-bold text-white uppercase'>Experience</p>
                        <p className='text-base font-semibold text-[#8b9f9f] mt-1  cursor-pointer'>2.5+ Years</p>
                    </div>
                </div>
            </div>

        </>
    )
}
