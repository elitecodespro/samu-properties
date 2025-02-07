"use client"

import useWindowDimensions from '@/hooks/useWindowDimensions';
import React from 'react'

function Blog({setting} : any) {
    const { width } : any = useWindowDimensions();

    const imgy = width && width > 640 ? '/backgrounds/desks/d5.png' : setting.blogsSectionBackgroundImage;
  return (
    <section className="bg-cover bg-no-repeat bg-gray-400 md:bg-gray-50 bg-blend-multiply pt-10" style={{backgroundImage: "url(" + imgy + ")"}}>
        <div className="p-4 font-[sans-serif] pt-8 pb-16 ">
            <div className="font-[sans-serif] bg-black bg-opacity-45 border border-gray-800 mx-auto max-w-4xl text-center py-8">
                <div className='mb-6 sm:mb-8'>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-gray-300">{setting.blogsSectionTitle}</h2>
                    <p className="text-lg text-gray-400">{setting.blogsSectionSubTitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8 px-10">
                    <div className="bg-[#173567] rounded overflow-hidden">
                        <img src="/blogs/n3.jpg" alt="Blog Post 1" className="w-full h-52 object-cover" />
                        <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-200 mb-3">Raisons pour lesquelles Dubaï est la destination idéale pour l'investissement immobilier</h3>
                        <p className="text-gray-400 text-sm">Dubaï est devenue un haut lieu mondial de l'investissement immobilier, et il est facile de comprendre pourquoi...</p>
                        <p className="text-gray-300 text-[13px] font-semibold mt-4">08 Jan 2025</p>
                        <a href="#" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-gray-200 hover:bg-gray-400 text-gray-900 text-[13px]">En savoir plus</a>
                        </div>
                    </div>

                    <div className="bg-[#173567] rounded overflow-hidden">
                        <img src="/blogs/n1.jpg" alt="Blog Post 1" className="w-full h-52 object-cover" />
                        <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-200 mb-3">Comment démarrer votre parcours d'investissement immobilier à Dubaï</h3>
                        <p className="text-gray-400 text-sm">Vous envisagez d'investir à Dubaï mais vous ne savez pas par où commencer ? Voici un guide simple pour vous aider à démarrer...</p>
                        <p className="text-gray-300 text-[13px] font-semibold mt-4">09 Jan 2025</p>
                        <a href="#" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-gray-200 hover:bg-gray-400 text-gray-900 text-[13px]">En savoir plus</a>
                        </div>
                    </div>

                    <div className="bg-[#173567] rounded overflow-hidden">
                        <img src="/blogs/n2.jpg" alt="Blog Post 1" className="w-full h-52 object-cover" />
                        <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-200 mb-3">Les avantages de travailler avec Samu Properties pour vos investissements à Dubaï</h3>
                        <p className="text-gray-400 text-sm">Qu'est-ce qui distingue Samu Properties sur le marché immobilier concurrentiel ? Voici pourquoi nos clients nous font confiance...</p>
                        <p className="text-gray-300 text-[13px] font-semibold mt-4">15 Jan 2025</p>
                        <a href="#" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-gray-200 hover:bg-gray-400 text-gray-900 text-[13px]">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog