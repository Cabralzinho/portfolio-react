import React from "react";
import { NavbarAnchor } from "./components/NavbarAnchor";
import { NavbarIcon } from "./components/NavbarIcon";
import styles from "../styles/Navbar.module.css";

export const NavbarDesktop = () => {
  return (
    <div
      className={`w-full flex justify-center border-b-2 z-[999] border-indigo-600 dark:border-indigo-950 bg-slate-950 text-gray-400 sticky top-0 dark:dark:bg-slate-950 mobile:hidden ${styles.animationNavbar}`}
    >
      <nav className="flex justify-between items-center container h-[100px]">
        <div className="flex items-center gap-2 hover:text-white cursor-pointer">
          <NavbarIcon />
          <h2>Cabral</h2>
        </div>

        <ul className="flex gap-12 text-[18px] dark:text-gray-400 font-bold">
          <NavbarAnchor
            href={"#start"}
            text={"Inicío"}
            index={1}
          />
          <NavbarAnchor
            href={"#about-me"}
            text={"Sobre mim"}
            index={2}
          />
          <NavbarAnchor
            href={"#projects"}
            text={"Projetos"}
            index={3}
          />
          <NavbarAnchor
            href={"#services"}
            text={"Serviços"}
            index={4}
          />
          <NavbarAnchor
            href={"#knowledges"}
            text={"Conhecimentos"}
            index={5}
          />
        </ul>
      </nav>
    </div>
  );
};
