import React from "react";
import { Link } from "react-router-dom";

function Profil() {
  return (
    <section className="profil">
      <div className="profil__container">
        <div className="profil__info">
          <h1 className="profil__title"> Henneron Mathys </h1>
          <p className="profil__subtitle">Développeur Front-end.</p>
        </div>
        <Link className="profil__link">Contactez moi</Link>
      </div>
    </section>
  );
}

export default Profil;
