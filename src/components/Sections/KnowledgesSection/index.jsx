import React from 'react'
import { Icons } from '../../Icons'

export const KnowledgesSection = () => {
  return (
    <section id='knowledges' className='flex flex-col items-center bg-gray-400/20 dark:bg-gray-900/50 py-20 gap-32 mobile:gap-20'>
      <h1>Conhecimentos</h1>
      <div className="flex mobile:flex-col mobile:items-center container gap-5">
        <article className='flex flex-col items-center justify-center text-center gap-2 border-2 border-indigo-800 dark:border-indigo-950 bg-indigo-200/60 dark:bg-gray-900 max-w-[18rem] rounded-2xl w-80 p-6'>
          <Icons.Html />
          <h2 className='dark:text-blue-500'>HTML5</h2>
          <p className='text-gray-800 dark:text-gray-300'>
            O HTML5 é usado para criar a estrutura e a semântica de páginas web.
          </p>
        </article>
        <article className='flex flex-col items-center justify-center text-center gap-2 border-2 border-indigo-800 dark:border-indigo-950 bg-indigo-200/60 dark:bg-gray-900 max-w-[18rem] rounded-2xl w-80 p-6'>
          <Icons.Css />
          <h2 className='dark:text-blue-500'>CSS3</h2>
          <p className='text-gray-800 dark:text-gray-300'>
            É usado para estilizar elementos escritos em uma linguagem de marcação como HTML.
          </p>
        </article>
        <article className='flex flex-col items-center justify-center text-center gap-2 border-2 border-indigo-800 dark:border-indigo-950 bg-indigo-200/60 dark:bg-gray-900 max-w-[18rem] rounded-2xl w-80 p-6'>
          <Icons.JavaScript />
          <h2 className='dark:text-blue-500'>JavaScript</h2>
          <p className='text-gray-800 dark:text-gray-300'>
            JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web.
          </p>
        </article>
        <article className='flex flex-col items-center justify-center text-center gap-2 border-2 border-indigo-800 dark:border-indigo-950 bg-indigo-200/60 dark:bg-gray-900 max-w-[18rem] rounded-2xl w-80 p-6'>
          <Icons.React />
          <h2 className='dark:text-blue-500'>React</h2>
          <p className='text-gray-800 dark:text-gray-300'>
            React é um framework JavaScript, que é usado para criar interfaces de usuário (UI) em aplicativos web.
          </p>
        </article>
      </div>
    </section>
  )
}
