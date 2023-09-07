import React, { useState } from 'react'
import styles from "../styles/Navbar.module.css";
import { NavbarIcon } from '../NavbarDesktop/components/NavbarIcon';
import { Icons } from '../../../Icons';
import { NavbarAnchor } from './components/NavbarAnchorMobile';
import { navbarAnchorsInfo } from '../../constants/navbarAnchorsInfo';

export const NavbarMobile = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)

  return (
    <div className='sticky top-0 z-[999]'>
      <div className={`w-full hidden mobile:flex  border-b-2 border-indigo-600 dark:border-indigo-950 bg-slate-950 text-gray-400 dark:dark:bg-slate-950 ${styles.animationNavbar}`}>
        <nav className='flex items-center justify-between p-4 container h-[100px]'>
          <div className='flex gap-2 items-center'>
            <NavbarIcon />
            <h2>Cabral</h2>
          </div>
          {navbarIsOpen ?
            <Icons.Close
              onClick={() => setNavbarIsOpen(false)}
              className="text-3xl cursor-pointer"
            />
            :
            <Icons.Bar
              onClick={() => setNavbarIsOpen(true)}
              className="text-3xl cursor-pointer"
            />
          }
        </nav>
      </div>
      {navbarIsOpen ?
        <div className='px-2 flex flex-col bg-slate-900'>
          <ul
            onClick={() => setNavbarIsOpen(false)}
            className='text-lg divide-y flex flex-col text-gray-200'>
            {navbarAnchorsInfo.map((info, index) =>
              <NavbarAnchor
                className="py-4 cursor-pointer w-full hover:text-gray-400"
                key={info.href}
                href={info.href}
                text={info.label}
                index={index}
              />
            )}
          </ul>
        </div>
        :
        null
      }
    </div>
  )
}
