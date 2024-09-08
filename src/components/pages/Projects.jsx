import React from 'react'
import underLine from '../../assets/img/line.svg'
import { useNavigate } from 'react-router-dom';

export default function Projects() {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg-[#212526] flex flex-col mt-5 mb-5 px-8 py-4 rounded-md border-2 border-[#2a2e2e] w-full'>
                <div className="intro text-center md:text-left" data-aos='fade-up' data-aos-duration='1500'>
                    <div className="flex flex-col md:flex-row mt-3">
                        <span className='square-marker mb-3 md:mb-0'></span>
                        <p className='text-[#8b9f9f] mb-3'>My <span className='text-[#56b887] mb-5'>Projects</span></p>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-12">
                            <h3 className='text-4xl md:text-5xl text-white leading-[40px] md:leading-[55px]'>A showcase of my<br /> <span className='text-[#56b887]'>Accomplishments</span> </h3>
                            <div className="flex justify-center md:justify-start">
                                <img src={underLine} alt="" className='mt-4' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='my-10 w-full'>
                    <h3 className='text-4xl md:text-5xl text-white leading-[40px] md:leading-[55px]'><span className='text-[#56b887]'>Comming</span> Soon</h3>
                </div> */}
                <div className="grid grid-cols-12 mt-16 gap-y-5 md:gap-x-5">
                    <div className="col-span-12 md:col-span-6">
                        <div className="relative w-full h-full rounded-md border-2 border-none project-card p-5 cursor-pointer">
                            <span className='absolute top-[5px] right-[5px] text-[#56b887] px-[8px] py-[5px] bg-white rounded-[50%] text-[12px] cursor-pointer' onClick={()=>navigate('/project-details')}>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </span>
                            <p className='text-xl font-semibold text-white'>Live Weather App</p>
                            <p className='text-[#8b9f9f] text-sm mt-3'><span className='text-[#56b887]'>Technlogy used:</span></p>
                            <p className='text-[#8b9f9f] text-sm'>Angular, Live weather API </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
