import React from 'react'
import { Icons } from '../../Icons'

export const ServicesSection = () => {
  return (
    <section id='services' className='w-full flex flex-col items-center py-20 gap-32 mobile:gap-28'>
      <h1>Serviços</h1>
      <div className='flex justify-center container gap-10'>
        <article className='flex flex-col items-center justify-center bg-indigo-200/75 dark:bg-gray-900 p-6 rounded-xl gap-4 border-2 border-indigo-600 dark:border-gray-800 max-w-[24rem] max-h-[24rem] text-center'>
          <Icons.Computer />
          <h2 className='dark:text-indigo-600'>Web Developer</h2>
          <p className='text-gray-800 dark:text-gray-200'>
            Criando interface gráficas e sites de alta qualidade para os clientes
          </p>
        </article>
      </div>
    </section>
  )
}
