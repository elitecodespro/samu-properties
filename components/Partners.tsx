"use client"

import useWindowDimensions from '@/hooks/useWindowDimensions';
import React, { Fragment } from 'react'

const Partners = ({partners} : any) => {
    const { width } : any = useWindowDimensions();

    const imgy = width && width > 640 ? '/backgrounds/desks/d1.png' : '/backgrounds/h1.jpeg';

  return (
    <div className="bg-cover bg-no-repeat bg-gray-400 md:bg-gray-50 bg-blend-multiply p-8 min-h-[350px] flex items-center justify-center font-sans" style={{backgroundImage: "url(" + imgy + ")"}}>
        <div className="shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-4">
            
        {partners && partners.length > 0 && (
            <Fragment>
                {partners.map((partner : any) => (
                    <div key={partner._id} className="text-center">
                        <img src={partner.logo} className='w-20' />
                        <p className="text-gray-300 text-base font-semibold mt-3">{partner.name}</p>
                    </div>
                ))}
            </Fragment>
        )}
        </div>
    </div>
  )
}

export default Partners