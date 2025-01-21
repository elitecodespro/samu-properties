import React from 'react'

function Hero() {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url('/backgrounds/sl1.jpg')] bg-gray-400 bg-blend-multiply">
        <div className="px-8 mx-auto max-w-screen-xl text-center py-24 lg:py-56 pt-60 lg:pt-60">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-300 md:text-4xl lg:text-5xl">Your Gateway to Real Estate <br /> Investment in Dubai</h1>
            <p className="mb-8 text-sm font-normal text-gray-300 lg:text-lg sm:px-16 lg:px-48 pt-8">Here at Step into the world of luxury and opportunity with Samu Properties. We specialize in connecting you to the most stunning real estate investments Dubai has to offer.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mb-16 md:mb-0">
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-300 rounded-lg bg-[#173567]">
                    Contact Us for More!
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero