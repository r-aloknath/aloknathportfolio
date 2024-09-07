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
                <div className="grid grid-cols-12 mt-10 md:gap-x-10">
                    <div className="col-span-12 md:col-span-6">
                        <div className='flex md:hidden items-center py-10'>
                            <i class="fa-solid fa-star py-[10px] px-[13px] bg-[#56b887] text-2xl text-white rounded-[50%]"></i> <br />
                            <p className='ml-4'> <span className='text-2xl font-bold text-white'>5 Star</span> <br /> <span className='text-[#8b9f9f]'>raed the </span> <span className='text-[#56b887]'>Success Stories</span></p>
                        </div>
                        <p className='text-[#8b9f9f] mb-3 text-justify'>I’m a web developer with over 2.5 years of experience crafting dynamic, user-friendly applications. My expertise spans across a wide range of modern technologies including Angular, React, React Native, Ionic, Laravel, and more. I am passionate about building clean, responsive, and efficient web solutions that deliver a seamless user experience. I’m now focusing on freelancing to bring flexible and high-quality solutions to clients around the globe.</p>
                        <div className='hidden md:flex items-center py-10 '>
                            <i class="fa-solid fa-star py-[10px] px-[13px] bg-[#56b887] text-2xl text-white rounded-[50%]"></i> <br />
                            <p className='ml-4'> <span className='text-2xl font-bold text-white'>5 Star</span> <br /> <span className='text-[#8b9f9f]'>raed the </span> <span className='text-[#56b887]'>Success Stories</span></p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p className='text-[#8b9f9f] mb-3  text-justify'>As a versatile developer, I specialize in creating web and mobile applications using the latest frameworks and tools. With a strong background in both frontend and backend technologies, I offer comprehensive solutions from start to finish. Whether it's developing scalable APIs with MySQL and MongoDB, or designing intuitive interfaces with HTML, CSS, Bootstrap, and Tailwind, I deliver solutions tailored to meet your needs.</p>
                        <p className='text-[#8b9f9f] mb-3  text-justify'>With a deep understanding of modern web technologies and frameworks, I bring a full-stack approach to every project. My experience in both the development of complex systems and design of engaging user experiences makes me a valuable partner for your next project. I thrive in collaborative environments and am committed to delivering on time, every time. Let’s work together to bring your vision to life.</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-10 mb-10 md:gap-x-10">
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
