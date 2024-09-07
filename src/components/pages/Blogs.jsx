import React from 'react'
import underLine from '../../assets/img/line.svg'
import blogThumbnail from '../../assets/img/blog-thumbnail.webp'
import { useNavigate } from 'react-router-dom';
export default function Blogs() {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg-[#212526] flex flex-col mt-5 mb-5 px-8 py-4 rounded-md border-2 border-[#2a2e2e] w-full'>
                <div className="intro text-center md:text-left" data-aos='fade-up' data-aos-duration='1500'>
                    <div className="flex flex-col md:flex-row mt-3">
                        <span className='square-marker mb-3 md:mb-0'></span>
                        <p className='text-[#8b9f9f] mb-3'>My News & <span className='text-[#56b887] mb-5'>Blogs</span></p>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-12">
                            <h3 className='text-4xl md:text-5xl text-white leading-[40px] md:leading-[55px]'>Get a taste of my <span className='text-[#56b887]'>Love</span><br />  for <span className='text-[#56b887]'>Writing</span></h3>
                            <div className="flex justify-center md:justify-start">
                                <img src={underLine} alt="" className='mt-4' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='my-10 w-full'>
                    <h3 className='text-4xl md:text-5xl text-white leading-[40px] md:leading-[55px]'><span className='text-[#56b887]'>Comming</span> Soon</h3>
                </div> */}
                <div className="grid grid-cols-12 md:gap-x-5 gap-y-5 mt-14 md:mt-10 mb-5">
                    <div className="col-span-12 md:col-span-6">
                        <div className="relative group rounded-md border-2 border-[#2a2e2e] hover:border-[#56b887] blog-card h-full w-full p-5">
                            <img src={blogThumbnail} alt="" className='rounded-md mb-3' />
                            <div className="flex flex-wrap items justify-center md:justify-between mt-5 relative">
                                <p className='px-4 py-1 bg-[#191c1c] rounded-2xl text-[#8b9f9f] w-fit'><i className="fa-regular fa-user text-[#56b887] me-2"></i> Aloknath</p>
                                <p className='text-[#8b9f9f] w-fit ml-1 mt-3 md:mt-0'><i className="fa-solid fa-calendar-days me-2"></i>07 Sept 2024</p>
                            </div>
                            <p className='text-2xl font-semibold text-white mt-5 mb-3 text-center md:text-left'>Adapting to change in current trends in wen technology</p>
                            <div className="absolute top-0 left-0 h-full w-full hidden group-hover:flex items-center justify-center backdrop-blur-[2px]" onClick={()=>navigate('/blog-details')}>
                                <span className='text-[#fff] px-4 py-3 md:p-8 bg-[#56b887] rounded-[50%] text-2xl md:text-4xl cursor-pointer'>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
