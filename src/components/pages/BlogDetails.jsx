import React from 'react'
import underLine from '../../assets/img/line.svg'

export default function BlogDetails() {
    return (
        <>
            <div className='bg-[#212526] flex flex-col mt-5 mb-5 px-8 py-4 rounded-md border-2 border-[#2a2e2e] w-full'>
                <div className="intro text-left" data-aos='fade-up' data-aos-duration='1500'>
                    <div className="flex flex-col md:flex-row mt-3">
                        <span className='square-marker mb-3 md:mb-0'></span>
                        <p className='text-[#8b9f9f] mb-3'>My News & <span className='text-[#56b887] mb-5'>Blogs</span></p>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-12">
                            <h3 className='text-4xl md:text-5xl text-white leading-[40px] md:leading-[55px]'>Adapting to change in current trends in wen technology</h3>
                            <div className="flex justify-start">
                                <img src={underLine} alt="" className='mt-4' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between md:justify-end mt-5 relative">
                    <p className='px-4 py-1 bg-[#191c1c] rounded-2xl text-[#8b9f9f] w-fit md:mr-3'><i className="fa-regular fa-user text-[#56b887] mr-2"></i> Aloknath</p>
                    <p className='text-[#8b9f9f] w-fit ml-1'><i className="fa-solid fa-calendar-days me-2"></i>07 Sept 2024</p>
                </div>
                <div className="blog-content">
                    <p className='text-[#8b9f9f] mb-3 mt-5 text-justify'>
                        Adapting to changes in current trends in web technology is crucial for developers to stay competitive and relevant. Web development is an ever-evolving field, driven by new tools, frameworks, and user expectations. Technologies like Jamstack, serverless architecture, and micro frontends are reshaping how developers build and deploy web applications. By embracing these trends, developers can create more scalable, secure, and performant websites while reducing complexity in the backend. Staying up-to-date with these changes ensures that professionals can leverage the best practices and tools to deliver efficient solutions.
                        <br />
                        <br />
                        The rise of Progressive Web Apps (PWAs), single-page applications (SPAs), and responsive design reflects the growing emphasis on user experience across multiple devices. As mobile-first development becomes more critical, developers must continuously adapt to changes in web design, such as integrating CSS Grid, Flexbox, and advanced frameworks like React, Vue, and Angular to deliver smooth, interactive, and engaging user interfaces. Keeping up with these trends allows developers to build responsive, fast, and engaging applications that meet modern user expectations.
                        <br />
                        <br />
                        In addition to front-end trends, web security and privacy standards are rapidly evolving due to increased cyber threats. Developers must stay informed about security best practices, including SSL certificates, OAuth, and WebAuthn to protect user data and maintain compliance with regulations like GDPR. Moreover, with the increasing adoption of cloud services and DevOps practices, the integration of CI/CD pipelines and containerization tools like Docker has become essential for efficient, secure, and scalable web application development. Adapting to these changes ensures a developer’s long-term success in a highly competitive and dynamic industry.
                    </p>
                </div>
            </div>
        </>
    )
}
