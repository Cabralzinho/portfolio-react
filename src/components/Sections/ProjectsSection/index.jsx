import React from 'react'

export const ProjectSection = () => {
  return (
    <section id='projects' className='flex w-full flex-col justify-center items-center py-20 mobile:py-5 gap-32 mobile:gap-20 bg-gray-400/20 dark:bg-gray-900/50'>
      <h1>Projetos</h1>
      <div className='flex mobile:flex-col gap-10 mobile:gap-5 container mobile:w-96 h-auto'>
        <article className='flex flex-col justify-start items-start border-2 border-blue-600 bg-gray-400/30 dark:bg-slate-950  rounded-2xl p-6 gap-6 w-full'>
          <h3>Pokedex</h3>
          <p className='text-lg text-gray-800 dark:text-gray-400'>
            Um projeto inspirado em uma Pokedex usando HTML, CSS, JavaScript manipulando API.
          </p>
          <a className='text-xl text-blue-900/90 dark:text-blue-500 hover:text-blue-600' href="">Confira o projeto aqui</a>
        </article>
        <article className='flex flex-col justify-start items-start border-2 border-red-600 bg-gray-400/30 dark:bg-slate-950 rounded-2xl p-6 gap-6 w-full'>
          <h3>Clone Spotify</h3>
          <p className='text-lg text-gray-800 dark:text-gray-400'>
            Um clone do spotify usando HTML, CSS, Bootstrap e responsividade para aprimorar a prática.
          </p>
          <a className='text-xl text-red-900/90 dark:text-red-500 hover:text-red-600' href="">Confira o projeto aqui</a>
        </article>
        <article className='flex flex-col justify-start items-start border-2 border-purple-600 bg-gray-400/30 dark:bg-slate-950 rounded-2xl p-6 gap-6 w-full'>
          <h3>Accordion</h3>
          <p className='text-lg text-gray-800 dark:text-gray-400'>
            Um projeto feito para aprimorar a lógica de programção feito com HTML, Tailwind, JavaScript.
          </p>
          <a className='text-xl text-purple-900/90 dark:text-purple-500 hover:text-purple-500' href="">Confira o projeto aqui</a>
        </article>
      </div>
    </section>
  )
}
