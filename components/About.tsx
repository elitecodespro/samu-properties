import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { FaHandsHoldingCircle } from 'react-icons/fa6'

function About() {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('/backgrounds/h4.jpeg')] bg-gray-400 bg-blend-multiply">
        <div className="max-w-6xl mx-auto py-16 px-4">
            <h2 className="text-gray-300 text-2xl font-bold text-center mb-8">À PROPOS DE NOUS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
                <div className="bg-[#173567] bg-opacity-55 border border-[#173567] text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-8 md:mx-0 pb-6">
                    <div className="p-4 text-center">
                        <FaInfoCircle className='text-5xl mb-6 inline-block' />
                        <h3 className="text-xl font-semibold mb-3">Notre mission</h3>
                        <p className="text-sm leading-relaxed">Notre mission est de simplifier le processus des investisseurs canadiens, en leur fournissant un soutien complet, de la recherche de biens à la gestion des investissements. Grâce à notre réseau de partenaires, de développeurs de confiance et à notre collaboration avec Patriot Real Estate, nous garantissons à nos clients des opportunités immobilières de qualité et un service adapté à leurs besoins spécifiques.</p>
                    </div>
                </div>

                <div className="bg-[#173567] bg-opacity-40 border border-[#173567] text-slate-200 overflow-hidden shadow-md hover:shadow-lg mx-8 md:mx-0 pb-6">
                    <div className="p-4 text-center">
                        <FaHandsHoldingCircle className='text-5xl mb-6 inline-block' />
                        <h3 className="text-xl font-semibold mb-3">Notre vision</h3>
                        <p className="text-sm leading-relaxed">Chez Samu Properties, notre vision est de devenir la référence incontournable pour les Québécois et les investisseurs internationaux souhaitant découvrir et exploiter le potentiel du marché immobilier de Dubaï.</p>
                        <br />
                        <p className="text-sm leading-relaxed">Nous aspirons à bâtir une communauté d'investisseurs confiants et bien informés, en leur offrant un accès privilégié aux meilleures opportunités, tout en maintenant des standards élevés de transparence, d'intégrité et de professionnalisme.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About