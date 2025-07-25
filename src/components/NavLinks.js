import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../components/Navbar.css";
import closeMenu from "../images/close.svg";
import openMenu from "../images/open.svg";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 /* const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('isMenuOpen:', isMenuOpen);
  };*/
  return (
    <>
     <button className="dropdown-toggle" onClick={() => {setIsMenuOpen(!isMenuOpen);
     console.log('Toggle menu clicked, isMenuOpen:', isMenuOpen);
}}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
    

      </button>
  

      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/experience" onClick={() => setIsMenuOpen(false)}>
          Experience
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default NavLinks;


