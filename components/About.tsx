"use client"

import useWindowDimensions from '@/hooks/useWindowDimensions';
import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { FaHandsHoldingCircle } from 'react-icons/fa6'

function About({setting} : any) {
    const { width } : any = useWindowDimensions();

    const imgy = width && width > 640 ? '/backgrounds/desks/d2.png' : setting.aboutBackgroundImage;

  return (
    <section className="bg-cover bg-no-repeat bg-gray-400 md:bg-gray-50 bg-blend-multiply" style={{backgroundImage: "url(" + imgy + ")"}}>
        <div className="max-w-6xl mx-auto py-16 px-4">
            <h2 className="text-gray-300 text-2xl font-bold text-center mb-8">{setting.aboutTitle}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-md:max-w-md mx-auto justify-center justify-items-center">
                <div className="bg-[#173567] bg-opacity-55 border border-[#173567] text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-8 md:mx-0 pb-6">
                    <div className="p-4 text-center">
                        <FaInfoCircle className='text-5xl mb-6 inline-block' />
                        <h3 className="text-xl font-semibold mb-3">{setting.missionTitle}</h3>
                        <p className="text-sm leading-relaxed">{setting.missionDescription}</p>
                    </div>
                </div>

                <div className="bg-[#173567] bg-opacity-40 border border-[#173567] text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-8 md:mx-0 pb-6">
                    <div className="p-4 text-center">
                        <FaHandsHoldingCircle className='text-5xl mb-6 inline-block' />
                        <h3 className="text-xl font-semibold mb-3">{setting.vissionTitle}</h3>
                        <p className="text-sm leading-relaxed">{setting.vissionDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About