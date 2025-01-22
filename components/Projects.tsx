import React from 'react'

function Projects() {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('/backgrounds/h2.jpeg')] bg-gray-400 bg-blend-multiply">

        <div className="pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
                <div className="bg-black bg-opacity-40 border border-gray-800 text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-2 md:mx-0">
                    <div className="p-10 text-center">
                        <img src="/logos/lg-3.png" alt="logo" className="w-40 mb-6 inline-block" />
                        <h3 className="text-2xl font-semibold mb-4">Notre collaborateur à Dubaï</h3>
                        <p className="text-sm leading-relaxed">Pour garantir un service de qualité et des opportunités exceptionnelles, Samu Properties collabore étroitement avec Patriot Real Estate, un acteur de renom sur le marché immobilier de Dubaï. Grâce à cette collaboration stratégique, nous offrons à nos clients un accès exclusif à des projets immobiliers prestigieux et à des développeurs de confiance.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-4 font-[sans-serif] pt-8 pb-16 ">
            <div className="font-[sans-serif] bg-[#173567] border border-[#173567] mx-auto max-w-4xl text-center py-8">
                <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300 mb-6 sm:mb-8">NOS PROJETS</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 px-10">
                    
                    <div className="group overflow-hidden cursor-pointer relative">
                        <div className="bg-gray-100 w-full overflow-hidden">
                            <img src="/properties/p1.jpg" alt="Product 1"
                            className="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700" />
                        </div>

                        <div className="p-4 relative">
                            <div className="z-20 relative">
                                <h6 className="text-xs font-bold text-gray-200 truncate">VERDANNA 1 BY-OBJECT 1</h6>
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
                                <h6 className="text-xs font-bold text-gray-200 truncate">VERDANNA 1 BY-OBJECT 1</h6>
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