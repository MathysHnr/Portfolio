import React from "react";
import { portfolio } from "../../assets/data/card";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="title">Portfolio</h2>
      <div className="portfolio__container">
        {portfolio.map((card, index) => (
          <div className="portfolio__card" key={index}>
            <img className="portfolio__img" src={card.image} alt="" />
            <div className="portfolio__content">
              <h3 className="portfolio__title">{card.name}</h3>
              <p className="portfolio__text">{card.text}</p>
              <div className="portfolio__btns">
                <Link to={card.code} className="portfolio__btn">
                  Voir le code
                </Link>
                {card.site !== "" && (
                  <Link to={card.site} className="portfolio__btn">
                    Voir le site
                  </Link>
                )}
              </div>
              <div className="portfolio__competences">
                {card.competences.map((competence, i) => (
                  <span key={i}>{competence}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
