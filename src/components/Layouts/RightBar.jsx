import React from 'react'

export default function RightBar() {
  return (
    <>
      <div className='bg-[#212526] mb-5 px-8 py-5 rounded-md border-2 border-[#2a2e2e] text-4xl text-[#8b9f9f] cursor-pointer flex items-center justify-center sticky top-0 z-10'>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className='bg-[#212526] mt-5 px-8 py-5 rounded-md border-2 border-[#2a2e2e] text-4xl text-[#8b9f9f] cursor-pointer flex flex-col items-center justify-center'>
        <div className='w-100 text-2xl mt-6 mb-7 tooltip'>
          <i className="fa-solid fa-house"></i>
          <div className="tooltip-content bg-[#56b887] text-base text-white text-center">home</div>
        </div>

        <div className='w-100 text-2xl mt-6 mb-7  tooltip'>
          <i className="fa-solid fa-briefcase"></i>
          <div className="tooltip-content bg-[#56b887] text-base text-white text-center">Experience</div>
        </div>

        <div className='w-100 text-2xl mt-6 mb-7  tooltip'>
          <i className="fa-solid fa-school"></i>
          <div className="tooltip-content bg-[#56b887] text-base text-white text-center">Education</div>
        </div>

        <div className='w-100 text-2xl mt-6 mb-7  tooltip'>
          <i className="fa-solid fa-diagram-project"></i>
          <div className="tooltip-content bg-[#56b887] text-base text-white text-center">Projects</div>
        </div>

        <div className='w-100 text-2xl mt-6 mb-7  tooltip'>
          <i className="fa-solid fa-feather"></i>
          <div className="tooltip-content bg-[#56b887] text-base text-white text-center">Blogs</div>
        </div>

        <div className='w-100 text-2xl mt-6 mb-7  tooltip'>
          <i className="fa-solid fa-message"></i>
          <div className="tooltip-content bg-[#56b887] text-base text-white text-center">Contact</div>
        </div>
      </div>
      <div className='mt-5 px-8 py-5 rounded-md text-4xl text-[#8b9f9f] cursor-pointer flex flex-col items-center justify-center'>
        <div className='w-100 text-2xl mt-6 mb-7 hover:text-[#56b887]'>
          <a href='https://www.linkedin.com/in/aloknath-rath?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel="noreferrer" ><p className='-rotate-90'>IN</p>
          </a>
        </div>

        <div className='w-100 text-2xl mt-6 mb-7 hover:text-[#56b887]'>
          <a href='https://x.com/AloknathRath' target='_blank' rel="noreferrer" ><p className='-rotate-90'>TW</p>
          </a>
        </div>

        <div className='w-100 text-2xl mt-6 mb-7 hover:text-[#56b887]'>
          <a href='https://www.instagram.com/aloknath.dev?igsh=MWRoNnFsMWF5bzA1bg==' target='_blank' rel="noreferrer">
            <p className='-rotate-90'>IG</p>
          </a>
        </div>

        <div className='w-100 text-2xl mt-6 mb-7 hover:text-[#56b887]'>
          <a href='https://github.com/r-aloknath' target='_blank' rel="noreferrer">
            <p className='-rotate-90'>GH</p>
          </a>
        </div>
      </div>
    </>
  )
}
