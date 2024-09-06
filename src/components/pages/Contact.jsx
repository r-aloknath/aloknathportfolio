import React from 'react'
import underLine from '../../assets/img/line.svg'
import phone from '../../assets/img/phone-call.svg'
import email from '../../assets/img/mail-open.svg'
import location from '../../assets/img/location-dot.svg'
export default function Contact() {
    return (
        <>
            <div className='bg-[#212526] flex flex-col mt-5 mb-5 px-8 py-4 rounded-md border-2 border-[#2a2e2e]'>
                <div className="intro text-center md:text-left" data-aos='fade-up' data-aos-duration='1500'>
                    <div className="flex flex-col md:flex-row mt-3">
                        <span className='square-marker mb-3 md:mb-0'></span>
                        <p className='text-[#8b9f9f] mb-3'><span className='text-[#56b887] mb-5'>Contact</span> me</p>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-12">
                            <h3 className='text-4xl md:text-5xl text-white leading-[40px] md:leading-[55px]'><span className='text-[#56b887]'>Reach or write </span> to the best <br /> around here.<span className='text-[#56b887]'> means ME ! </span></h3>
                            <div className="flex justify-center md:justify-start">
                                <img src={underLine} alt="" className='mt-4' />
                            </div>
                        </div>
                        <div className="hidden md:visible md:col-span-4"></div>
                    </div>
                </div>
                <h3 className='text-[#8b9f9f] text-3xl my-10'>Contact</h3>
                <div className="grid grid-cols-12 gap-x-4 gap-y-4">
                    <div className="col-span-12 md:col-span-6 rounded-md border-2 border-[#2a2e2e] hover:border-[#56b887] cursor-pointer p-6">
                        <div className="flex flex-row items-center justify-between ">
                            <img src={phone} alt="" className='h-11' />
                            <p className='text-[#8b9f9f] mb-3 text-right'><span className='text-[#56b887] mb-5'>Contact <br /></span>Phone</p>
                        </div>
                        <p className='font-extrabold text-white mt-6'>+91-7749927175</p>
                    </div>
                    <div className="col-span-12 md:col-span-6 rounded-md border-2 border-[#2a2e2e] hover:border-[#56b887] cursor-pointer p-6">
                        <div className="flex flex-row items-center justify-between ">
                            <img src={email} alt="" className='h-11' />
                            <p className='text-[#8b9f9f] mb-3 text-right'><span className='text-[#56b887] mb-5'>Contact <br /></span>Email</p>
                        </div>
                        <p className='font-extrabold text-white mt-6'>aloknath.ar@gmail.com</p>
                    </div>
                    <div className="col-span-12 md:col-span-6 rounded-md border-2 border-[#2a2e2e] hover:border-[#56b887] cursor-pointer p-6">
                        <div className="flex flex-row items-center justify-between ">
                            <img src={location} alt="" className='h-11' />
                            <p className='text-[#8b9f9f] mb-3 text-right'><span className='text-[#56b887] mb-5'>Contact <br /></span>Email</p>
                        </div>
                        <p className='font-extrabold text-white mt-6'>Patia, Bhubaneswar<br />Odisha, India</p>
                    </div>
                </div>
                <h3 className='text-[#8b9f9f] text-3xl my-10'>Location Map</h3>
                <div className='flex items-center w-full'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1870.2679706158503!2d85.81788295816594!3d20.360780897146373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093b2361c1ad%3A0xbe76d77ac9faa12c!2sLP-104%2C%20Prasanti%20Vihar%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1725297332661!5m2!1sen!2sin" className='w-full h-[350px] md:h-[500px] rounded-md' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='my-location-map'></iframe>
                </div>
                <h3 className='text-[#8b9f9f] text-3xl my-10'>Contact Me</h3>
                <div className='grid grid-cols-12 gap-x-4 gap-y-8 mb-3'>
                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label htmlFor="firstName" className='text-white text-sm mb-5'>Your first name<span className='text-[#56b887] ms-2'>*</span></label>
                        <input id='firstName' type="text" className='text-white outline-none bg-transparent border-b-[1.5px] border-[#bacdcd52] focus:border-[#56b887]' />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label htmlFor="lastName" className='text-white text-sm mb-5'>Your last name<span className='text-[#56b887] ms-2'>*</span></label>
                        <input id='lastName' type="text" className='text-white outline-none bg-transparent border-b-[1.5px] border-[#bacdcd52] focus:border-[#56b887]' />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label htmlFor="email" className='text-white text-sm mb-5'>Your email address<span className='text-[#56b887] ms-2'>*</span></label>
                        <input id='email' type="email" className='text-white outline-none bg-transparent border-b-[1.5px] border-[#bacdcd52] focus:border-[#56b887]' />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col">
                        <label htmlFor="phone" className='text-white text-sm mb-5'>Your lphone number<span className='text-[#56b887] ms-2'>*</span></label>
                        <input id='phone' type="phone" className='text-white outline-none bg-transparent border-b-[1.5px] border-[#bacdcd52] focus:border-[#56b887]' />
                    </div>
                    <div className="col-span-12 flex flex-col">
                        <label htmlFor="phone" className='text-white text-sm mb-5'>Your message<span className='text-[#56b887] ms-2'>*</span></label>
                        <textarea id='phone' type="phone" className='text-white outline-none bg-transparent border-b-[1.5px] border-[#bacdcd52] focus:border-[#56b887] resize-none' rows={3}></textarea>
                    </div>
                    <div className="col-span-12 mt-3">
                        <button className='px-6 py-4 bg-[#56b887] text-lg text-white font-bold rounded-md float-right w-full sm:w-[50%] md:w-[25%] cursor-pointer'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
