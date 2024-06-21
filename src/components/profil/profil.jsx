import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Profil() {
  return (
    <section className="profil">
      <div className="profil__container">
        <div className="profil__info">
          <h1 className="profil__title"> Henneron Mathys </h1>
          <p className="profil__subtitle">Développeur Front-end.</p>
        </div>
        <ScrollLink
          to="contact"
          className="profil__link"
          smooth={true}
          duration={500}
        >
          Contactez moi
        </ScrollLink>
      </div>
    </section>
  );
}

export default Profil;
