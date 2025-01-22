import React from 'react'

function Team() {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('/backgrounds/h4.jpeg')] bg-gray-400 bg-blend-multiply pb-12">

        <div className="p-4 font-[sans-serif] pt-16 pb-6 ">
            <div className="max-w-4xl mx-auto relative bg-[#173567] bg-opacity-60 border border-[#173567] p-8">
                <div className="text-center">
                    <h2 className="text-gray-300 text-2xl font-bold">NOTRE ÉQUIPE</h2>
                </div>

                <div className="max-w-xl mt-9 mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <img src="/team/t2.jpeg" className="w-52 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white" />
                        <div className="mt-4">
                            <h4 className="text-gray-200 text-base font-bold">MUSAFIRI BAFUNIYEMBAKA</h4>
                            <p className="text-xs text-gray-400 mt-1">Consultant, Immobilier</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-300 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer absolute left-8 top-0 bottom-0 my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 inline" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000"></path>
                    </svg>
                </div>
                <div className="bg-gray-800 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer absolute right-8 top-0 bottom-0 my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div className="p-4 font-[sans-serif] pt-6">
            <div className="font-[sans-serif] bg-black bg-opacity-45 border border-gray-800 mx-auto max-w-4xl text-center py-8">
                <div className='mb-6 sm:mb-8'>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300">Zones Populaires</h2>
                    <p className="text-lg text-gray-400">Découvrir Dubaï</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 px-10">
                    
                    <div className="group overflow-hidden cursor-pointer relative">
                        <div className="bg-gray-100 w-full overflow-hidden">
                            <img src="/properties/p1.jpg" alt="Product 1"
                            className="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
                        </div>

                        <div className="p-4 relative">
                            <div className="z-20 relative">
                                <h6 className="text-sm font-semibold text-gray-200 truncate">Palm Jumeirah</h6>
                            </div>
                        </div>
                    </div>

                    <div className="group overflow-hidden cursor-pointer relative">
                        <div className="bg-gray-100 w-full overflow-hidden">
                            <img src="/properties/p5.jpg" alt="Product 1"
                            className="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
                        </div>

                        <div className="p-4 relative">
                            <div className="z-20 relative">
                                <h6 className="text-sm font-semibold text-gray-200 truncate">Palm Jumeirah</h6>
                            </div>
                        </div>
                    </div>

                </div>
                
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-300 rounded-lg bg-[#173567] w-1/2 mt-6">
                    En Savoir Plus
                </a>
            </div>
        </div>

    </section>
  )
}

export default Team