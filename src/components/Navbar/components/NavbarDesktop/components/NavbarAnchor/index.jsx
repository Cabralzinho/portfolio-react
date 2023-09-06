import React from 'react'
import { useHashChange } from './hooks/useHashChange'

export const NavbarAnchor = ({
  href,
  text,
  index
}) => {
  const hash = useHashChange();
  const hashMatched = hash === href

  return (
    <li className=''>
      <a
        style={{animationDelay: `${index * 0.2}s`}}
        className={`dark:hover:text-gray-200 hover:text-gray-100 transition-all opacity-0 animation-appear ${hashMatched ? "text-indigo-600" : ""}`}
        href={href}>
        {text}
      </a>
    </li>
  )
}
