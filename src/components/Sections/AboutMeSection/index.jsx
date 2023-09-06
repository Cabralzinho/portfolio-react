import React from 'react'
import illustration from "../../../../public/images/about-me.svg"
import { Icons } from '../../Icons'

export const AboutMeSection = () => {
  return (
    <section id='about-me' className='w-full flex justify-center py-20 mobile:p-5'>
      <div className="flex mobile:flex-col items-center justify-between gap-6 mobile:gap-3 rounded-3xl p-6 mobile:p-5 bg-indigo-200/75 dark:bg-gray-900 dark:border-indigo-950 border-2 border-indigo-600 h-auto container">
        <div className="w-full mobile:w-[40%]">
          <img className='animation-float' src={illustration} alt="" />
        </div>
        <div className="flex flex-col mobile:justify-center mobile:items-center gap-4 mobile:gap-3">
          <h3 className='text-indigo-700 dark:text-indigo-400'>Quem sou</h3>
          <h2 className='text-indigo-950 dark:text-indigo-600'>Thiago Cabral</h2>
          <h6 className='font-bold uppercase dark:text-gray-300'>front-end developer</h6>
          <p className='text-gray-800 dark:text-gray-400 mobile:text-center text-lg py-10 mobile:py-6'>
            Sou focado em desenvolvimento front-end de aplicações web. Construo interfaces modernas e de alta qualidade, focando principalmente em performance, acessibilidade e responsividade.
          </p>
          <nav>
            <ul className='flex items-center gap-6 text-2xl'>
              <li className='group border-2 rounded-lg border-gray-600 mobile:dark:border-indigo-600 dark:border-indigo-300/50 hover:border-indigo-400 bg-indigo-300/50 dark:bg-indigo-600/50 hover:bg-indigo-300 dark:hover:bg-indigo-700 hover:text-indigo-600 dark:hover:text-slate-200 w-[4rem] h-[4rem]'>
                <a className='flex w-full justify-center items-center h-full' href="">
                  <Icons.Instagram />
                </a>
              </li>
              <li className='group border-2 rounded-lg border-gray-600 mobile:dark:border-indigo-600 dark:border-indigo-300/50 hover:border-indigo-400 bg-indigo-300/50 dark:bg-indigo-600/50 hover:bg-indigo-300 dark:hover:bg-indigo-700 hover:text-indigo-600 dark:hover:text-slate-200 w-[4rem] h-[4rem]'>
                <a className='flex w-full justify-center items-center h-full' href="">
                  <Icons.Linkedin />
                </a>
              </li>
              <li className='group border-2 rounded-lg border-gray-600 mobile:dark:border-indigo-600 dark:border-indigo-300/50 hover:border-indigo-400 bg-indigo-300/50 dark:bg-indigo-600/50 hover:bg-indigo-300 dark:hover:bg-indigo-700 hover:text-indigo-600 dark:hover:text-slate-200 w-[4rem] h-[4rem]'>
                <a className='flex w-full justify-center items-center h-full' href="">
                  <Icons.Github />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
