import React from "react";
import imagePortfolio from "../../assets/images/image_portfolio.png";
import { Link } from "react-router-dom";

function Info() {
  return (
    <section className="info">
      <div className="info__content">
        <h2 className="title">À propos de moi</h2>
        <div className="info__flex ">
          <div className="info__text">
            <p className="info__subtitle">
              Je suis Mathys HENNERON, un jeune <strong>développeur web</strong>{" "}
              spécialisé dans le <strong>front-end</strong>. J'ai suivi une
              formation intensive de 9 mois chez OpenClassrooms en tant qu'
              <strong>intégrateur web</strong>, ce qui m'a permis d'acquérir des
              compétences équivalentes à un diplôme de niveau Bac+2.
            </p>
            <p className="info__subtitle">
              Depuis mon plus jeune âge, je suis passionné par l'
              <strong>informatique</strong>, et je souhaite transformer cette
              passion en une carrière. Mon objectif est de continuer à
              développer mes compétences et mes connaissances dans ce vaste
              univers de l'<strong>informatique</strong>. Je suis ouvert aux
              opportunités d'emploi et aux projets futurs dans le domaine.
            </p>
            <p className="info__subtitle">
              N'hésitez pas à me contacter si vous êtes à la recherche d'un{" "}
              <strong>développeur web</strong> enthousiaste et motivé pour
              rejoindre votre équipe ou collaborer sur un projet. Je suis
              impatient de contribuer à votre succès.
            </p>
          </div>
          <div className="info__image">
            <img src={imagePortfolio} alt="profil" />
          </div>
        </div>
        <div className="info__cv">
          <Link> Télechargez mon CV </Link>
        </div>
      </div>
    </section>
  );
}

export default Info;
