import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/marvel-logo.jpg";

const Nav = () => {
  return (
    <>
      <nav className="bg-marvelRed flex justify-between py-1 px-4 ">
        <Link to="/">
          <img className="w-36" src={Logo} alt="Logo" />
        </Link>
        <ul className="flex items-center gap-6 mr-6 text-2xl text-white">
          <li className="hover:text-gray-400 transition-all">
            <Link to="/characters">Персонажи</Link>
          </li>
          <li className="hover:text-gray-400 transition-all">
            <Link to="/comics">Комиксы</Link>
          </li>
          <li className="hover:text-gray-400 transition-all">
            <Link to="/events">События</Link>
          </li>
        </ul>
      </nav>
      
    </>
  );
};

export default Nav;