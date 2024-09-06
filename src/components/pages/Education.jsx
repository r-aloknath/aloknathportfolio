import React from 'react'
import underLine from '../../assets/img/line.svg'

export default function Education() {
    const webDesin = "80%"
    return (
        <>
            <div className='bg-[#212526] flex flex-col mt-5 mb-5 px-8 py-4 rounded-md border-2 border-[#2a2e2e]'>
                <div className="intro text-center md:text-left" data-aos='fade-up' data-aos-duration='1500'>
                    <div className="flex flex-col md:flex-row mt-3">
                        <span className='square-marker mb-3 md:mb-0'></span>
                        <p className='text-[#8b9f9f] mb-3'>Education <span className='text-[#56b887] mb-5'>&</span> Skills</p>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-12">
                            <h3 className='text-4xl md:text-5xl text-white leading-[40px] md:leading-[55px]'>Aloknath's<br /> <span className='text-[#56b887]'>Education </span> & <span className='text-[#56b887]'>Skills </span></h3>
                            <div className="flex justify-center md:justify-start">
                                <img src={underLine} alt="" className='mt-4' />
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='text-[#8b9f9f] text-3xl my-10'>Education</h3>
                <div className="">
                    <div className="education-container items-center justify-between md:ps-8 py-4 grid grid-cols-12 gap-y-2 mb-8 md:mb-0 cursor-pointer">
                        <div className='col-span-12 md:col-span-4'>
                            <p className='text-lg text-white font-semibold'>MCA <br /><span className="text-sm">(Master of Computer Application)</span></p>
                            <p className='text-[#8b9f9f] mb-3'>Aug 2020 - March 2024</p>
                        </div>
                        <div className='col-span-12 md:col-span-8'>
                            <p className='text-lg text-white font-semibold'>Indira Gandhi Institute of TEchnology</p>
                            <p className='text-[#8b9f9f] mb-3'>Master of Computer Applications (MCA) is a postgraduate program focused on advanced computer science, software development, and application programming.</p>
                        </div>
                    </div>
                    <div className="education-container items-center justify-between md:ps-8  py-4 grid grid-cols-12 gap-y-2 mb-8 md:mb-0 cursor-pointer">
                        <div className='col-span-12 md:col-span-4'>
                            <p className='text-lg text-white font-semibold'>BSC CSC <br /><span className="text-sm">(Bachelor of Sciencd in Computer Science)</span></p>
                            <p className='text-[#8b9f9f] mb-3'>Sept 2017 - June 2020</p>
                        </div>
                        <div className='col-span-12 md:col-span-8'>
                            <p className='text-lg text-white font-semibold'>Fakir Mohan Autonomous College</p>
                            <p className='text-[#8b9f9f] mb-3 text-ju'>Bachelor of Science in Computer Science (BSc CS) is an undergraduate program that focuses on the foundational principles of computing, programming, and software development.</p>
                        </div>
                    </div>

                </div>
                <h3 className='text-[#8b9f9f] text-3xl my-10'>Skills</h3>
                <div className="w-full grid grid-cols-12 md:gap-x-14 gap-y-9">
                    <div className="col-span-12 md:col-span-6">
                        <p className='text-lg text-white font-semibold'>Web Developemment</p>
                        <div className="bg-[#363c3c] h-[15px] w-full relative mt-2">
                            <div className={`absolute top-0 left-0 bg-[#56b887] h-[5px] w-[${webDesin}]`}></div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p className='text-lg text-white font-semibold'>Web Design</p>
                        <div className="bg-[#363c3c] h-[15px] w-full relative mt-2">
                            <div className="absolute top-0 left-0 bg-[#56b887] h-[5px] w-[70%]"></div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p className='text-lg text-white font-semibold'>Javascript</p>
                        <div className="bg-[#363c3c] h-[15px] w-full relative mt-2">
                            <div className="absolute top-0 left-0 bg-[#56b887] h-[5px] w-[95%]"></div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p className='text-lg text-white font-semibold'>Typescript</p>
                        <div className="bg-[#363c3c] h-[15px] w-full relative mt-2">
                            <div className="absolute top-0 left-0 bg-[#56b887] h-[5px] w-[90%]"></div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p className='text-lg text-white font-semibold'>HTML, CSS</p>
                        <div className="bg-[#363c3c] h-[15px] w-full relative mt-2">
                            <div className="absolute top-0 left-0 bg-[#56b887] h-[5px] w-[95%]"></div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p className='text-lg text-white font-semibold'>Tailwind</p>
                        <div className="bg-[#363c3c] h-[15px] w-full relative mt-2">
                            <div className="absolute top-0 left-0 bg-[#56b887] h-[5px] w-[85%]"></div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p className='text-lg text-white font-semibold'>Bootstrap</p>
                        <div className="bg-[#363c3c] h-[15px] w-full relative mt-2">
                            <div className="absolute top-0 left-0 bg-[#56b887] h-[5px] w-[80%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
