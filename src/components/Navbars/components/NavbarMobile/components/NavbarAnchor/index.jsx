import React from 'react'
import { useHashChangeMobile } from './hooks/useHashChangeMobile'

export const NavbarAnchor = ({
  className,
  href,
  text,
  index
}) => {
  const hash = useHashChangeMobile();
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
