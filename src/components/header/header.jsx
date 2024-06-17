import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [isMenuActive, setMenuActive] = useState(true);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };
  return (
    <header className="header">
      <nav
        className={`${
          isMenuActive ? "header__nav" : "header__active header__nav"
        }`}
      >
        <h1 className="header__title">Mathys Henneron</h1>
        <ul>
          <li>
            <ScrollLink
              to="about"
              className="header__lien"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              À propos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="competences"
              className="header__lien"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Compétences
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="portfolio"
              className="header__lien"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              className="header__lien"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <div className="header__icons" onClick={toggleMenu}>
          {isMenuActive ? <span>&#9776;</span> : <span>&#10005;</span>}
        </div>
      </nav>
    </header>
  );
}

export default Header;
