import React from 'react'

function Hero() {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-[url('/backgrounds/h1.jpeg')] bg-gray-500 bg-blend-multiply">
        <div className="px-8 mx-auto max-w-screen-xl text-center py-24 lg:py-56 pt-60 lg:pt-60">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-8 text-gray-200 md:text-3xl lg:text-4xl">L'EXPERTISE <br /> QUÉBÉCOISE POUR VOS <br /> PROJETS À DUBAÏ</h1>
            <p className="mb-8 text-sm font-normal text-gray-400 lg:text-lg sm:px-16 lg:px-48 pt-8">Bienvenue chez Samu Immobilier. Explorez l'excellence à Dubaï avec notre expertise et découvrez des opportunités uniques pour bâtir votre avenir.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center items-center sm:space-y-0 mb-16 md:mb-0">
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-300 rounded-lg bg-[#173567] w-72">
                Nous Contacter Maintenant
              </a>
            </div>
        </div>
    </section>
  )
}

export default Hero