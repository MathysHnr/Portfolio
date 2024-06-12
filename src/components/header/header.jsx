import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="header__nav">
          <li>
            <NavLink className="header__lien">A propos</NavLink>
          </li>
          <li>
            <NavLink className="header__lien">Compétences</NavLink>
          </li>
          <li>
            <NavLink className="header__lien">Portfolio</NavLink>
          </li>
          <li>
            <NavLink className="header__lien">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
