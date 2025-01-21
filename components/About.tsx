import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { FaHandsHoldingCircle } from 'react-icons/fa6'

function About() {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('/backgrounds/sl1.jpg')] bg-gray-400 bg-blend-multiply">
        <div className="max-w-6xl mx-auto py-16 px-4">
            <h2 className="text-gray-300 text-3xl font-extrabold text-center mb-16">Discover Who We Are!</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
                <div className="bg-[#173567] bg-opacity-55 border border-[#173567] text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-12 md:mx-0">
                    <div className="p-10 text-center">
                        <FaInfoCircle className='text-5xl mb-6 inline-block' />
                        <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                        <p className="text-sm leading-relaxed">To deliver exceptional real estate solutions and ensure every client's investment journey is seamless and rewarding.</p>
                    </div>
                </div>

                <div className="bg-[#173567] bg-opacity-40 border border-[#173567] text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-12 md:mx-0">
                    <div className="p-10 text-center">
                        <FaHandsHoldingCircle className='text-5xl mb-6 inline-block' />
                        <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                        <p className="text-sm leading-relaxed">To be your trusted partner in real estate investment, empowering your financial future with Dubai's top properties.</p>
                    </div>
                </div>

                <div className="bg-[#173567] bg-opacity-40 border border-[#173567] text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-12 md:mx-0">
                    <div className="p-10 text-center">
                        <FaInfoCircle className='text-5xl mb-6 inline-block' />
                        <h3 className="text-xl font-semibold mb-3">Core Values</h3>
                        <p className="text-sm leading-relaxed">
                            Transparency: Clear and honest communication. <br />
                            Reliability: Your goals are our priority. <br />
                            Expertise: Deep knowledge of Dubai's real estate market.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About