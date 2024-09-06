import React from 'react'
import underLine from '../../assets/img/line.svg'

export default function Blogs() {
    return (
        <>
            <div className='bg-[#212526] flex flex-col mt-5 mb-5 px-8 py-4 rounded-md border-2 border-[#2a2e2e] w-full'>
                <div className="intro text-center md:text-left" data-aos='fade-up' data-aos-duration='1500'>
                    <div className="flex flex-col md:flex-row mt-3">
                        <span className='square-marker mb-3 md:mb-0'></span>
                        <p className='text-[#8b9f9f] mb-3'>My <span className='text-[#56b887] mb-5'>Blogs</span></p>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-12">
                            <h3 className='text-4xl md:text-5xl text-white leading-[40px] md:leading-[55px]'>Get a taste of my <br /> <span className='text-[#56b887]'>Love</span> for <span className='text-[#56b887]'>Writing</span></h3>
                            <div className="flex justify-center md:justify-start">
                                <img src={underLine} alt="" className='mt-4' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-10 w-full'>
                    <h3 className='text-4xl md:text-5xl text-white leading-[40px] md:leading-[55px]'><span className='text-[#56b887]'>Comming</span> Soon</h3>
                </div>
            </div>
        </>
    )
}
