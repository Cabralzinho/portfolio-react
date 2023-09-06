import React from 'react'
import styles from "../styles/Navbar.module.css";
import { NavbarIcon } from '../NavbarDesktop/components/NavbarIcon';

export const NavbarMobile = () => {
  return (
    <div className={`w-full hidden mobile:flex  border-b-2 border-indigo-600 dark:border-indigo-950 bg-slate-950 text-gray-400 sticky top-0 z-[999] dark:dark:bg-slate-950 ${styles.animationNavbar}`}>
      <nav className='flex items-center justify-between container h-[100px]'>
        <div className='flex gap-2 items-center'>
          <NavbarIcon />
          <h2>Cabral</h2>
        </div>
      </nav>
    </div>
  )
}
