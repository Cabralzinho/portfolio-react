import React from 'react'
import { useHashChangeDesktop } from './hooks/useHashChangeDesktop'

export const NavbarAnchor = ({
  className,
  href,
  text,
  index
}) => {
  const hash = useHashChangeDesktop();
  const hashMatched = hash === href

  return (
    <li className="flex">
      <a
        style={{animationDelay: `${index * 0.2}s`}}
        className={className}
        href={href}>
        {text}
      </a>
    </li>
  )
}
