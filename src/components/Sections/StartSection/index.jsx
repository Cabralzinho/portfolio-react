import React from 'react'
import { ButtonPrimary } from '../../ButtonPrimary'
import { Icons } from '../../Icons'
import profileImage from "../../../../public/images/photo-me.webp"

export const StartSection = () => {
  return (
    <section id='start' className='w-full flex justify-center py-20 mobile:py-5'>
      <div className='flex mobile:flex-col-reverse mobile:text-center justify-center items-center gap-10 mobile:gap-4 container'>
        <div className='flex flex-col mobile:items-center gap-8 max-w-[600px] mobile:w-full'>
          <h2>
            Ajudando empresas a construírem <span className='text-gradient-primary'>Websites</span> de forma moderna e responsiva.
          </h2>
          <p className='text-gray-600 dark:text-gray-200 text-lg'>
            Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado.
          </p>
          <ButtonPrimary className={"flex items-center gap-2 w-fit min-w-[250px] text-lg"}>
            <Icons.Github />
            <a href='https://github.com/Cabralzinho' target='_blank'>GitHub</a>
          </ButtonPrimary>
        </div>
        <img className='rounded-full w-96 mobile:w-48 animation-float' src={profileImage} alt="" />
      </div>
    </section>
  )
}
