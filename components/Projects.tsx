import React from 'react'

function Projects() {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('/backgrounds/sl1.jpg')] bg-gray-400 bg-blend-multiply">
        <div className="p-4 font-[sans-serif] py-16 ">
            <div className="font-[sans-serif] bg-[#173567] bg-opacity-60 border border-[#173567] mx-auto max-w-4xl text-center py-8">
                <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300 mb-6 sm:mb-8">Recent Properties</h2>
                
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
            </div>
        </div>
    </section>
  )
}

export default Projects