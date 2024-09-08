import React from 'react'
import { useSelector } from 'react-redux';
import logo from '../../assets/img/anr-logo.png';
import { toggle } from '../../features/toogleMobileSideNavSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'


export default function MobileRightBar() {
    const isOpen = useSelector((state) => state.mobileNavToggle.isOpen);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={`fixed right-0 top-0 h-[100vh] w-[100vw] bg-[#ffffff21] backdrop-blur-[3px] mobile-sidebar z-[11] ${isOpen ? 'open' : ''}  visible lg:hidden`}>
            <div className='h-[100vh] w-[250px] sm:w-[400px] bg-[#222525] float-right'>
                <div className="flex flex-row justify-between items-center px-8 pt-8">
                    <img src={logo} alt="" className='h-8' />
                    <div className='p-1 bg-[#56b887] rounded-md' onClick={() => dispatch(toggle())}>
                        <span className="close-mark cursor-pointer" ></span>
                    </div>
                </div>
                <div className="nav-container">
                    <div className='px-8 py-5 rounded-md text-4xl text-[#8b9f9f] cursor-pointer'>
                        <div className='w-100 text-xl mt-6 mb-8 text-left' onClick={() => { navigate('/'); dispatch(toggle()) }}>
                            <i className="fa-solid fa-house"></i>
                            <span className="text-[#8b9f9f] text-base ms-4 uppercase">home</span>
                        </div>

                        <div className='w-100 text-xl mt-6 mb-8 text-left'>
                            <i class="fa-solid fa-user"></i>
                            <span className="text-[#8b9f9f] text-base ms-4 uppercase" onClick={() => { navigate('about'); dispatch(toggle()) }}>About</span>
                        </div>

                        <div className='w-100 text-xl mt-6 mb-8 text-left' onClick={() => { navigate('education'); dispatch(toggle()) }}>
                            <i className="fa-solid fa-school"></i>
                            <span className="text-[#8b9f9f] text-base ms-4 uppercase">Education</span>
                        </div>

                        <div className='w-100 text-xl mt-6 mb-8 text-left' onClick={() => { navigate('projects'); dispatch(toggle()) }}>
                            <i className="fa-solid fa-diagram-project"></i>
                            <span className="text-[#8b9f9f] text-base ms-4 uppercase">Projects</span>
                        </div>

                        <div className='w-100 text-xl mt-6 mb-8 text-left' onClick={() => { navigate('blogs'); dispatch(toggle()) }}>
                            <i className="fa-solid fa-feather"></i>
                            <span className="text-[#8b9f9f] text-base ms-4 uppercase">Blogs</span>
                        </div>

                        <div className='w-100 text-xl mt-6 mb-8 text-left' onClick={() => { navigate('contact'); dispatch(toggle()) }}>
                            <i className="fa-solid fa-message"></i>
                            <span className="text-[#8b9f9f] text-base ms-4 uppercase">Contact</span>
                        </div>
                    </div>
                </div>
                <div className="px-8 cursor-pointer">
                    <p className=' text-2xl font-bold text-white mb-4'>Contact Me</p>
                    {/* <p className="text-[#8b9f9f] text-base uppercase mb-2">+91-774927175</p> */}
                    <a href="tel:+917749927175" className="block text-[#8b9f9f] text-base uppercase py-2">+91-774927175</a>
                    <a href="mailto:aloknath.ar@gmail.com" className="block text-[#8b9f9f] text-base py-2">aloknath.ar@gmail.com</a>
                </div>

            </div>
        </div>
    )
}
