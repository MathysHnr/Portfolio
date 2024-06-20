import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fhr806k",
        "template_oyl59v7",
        form.current,
        "Kqxp7lyF5_MlraMv6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setConfirmationMessage("Votre message a bien été envoyé !");
          setTimeout(() => {
            setConfirmationMessage("");
          }, 5000);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setConfirmationMessage(
            "Une erreur est survenue. Veuillez réessayer."
          );
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="title">Contact</h2>
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__left">
            <div className="contact__left-top">
              <h3 className="contact__title">Mathys Henneron</h3>
              <p className="contact__subtitle">
                N'hesitez pas à me contacter !
              </p>
            </div>
            <div className="contact__left-bottom">
              <div className="contact__info">
                <i className="fa-solid fa-location-dot  "></i>{" "}
                <p className="contact__text"> Leforest, Pas-de-Calais</p>
              </div>
              <div className="contact__info">
                <i className="fa-solid fa-envelope"></i>{" "}
                <Link
                  className="contact__text"
                  to="mailto:henneron.mathyss@gmail.com"
                >
                  henneron.mathyss@gmail.com
                </Link>
              </div>
              <div className="contact__info">
                <i className="fa-solid fa-phone "></i>{" "}
                <Link className="contact__text" to="tel:0644309897">
                  06 44 30 98 97
                </Link>
              </div>
            </div>
            <div className="contact__icone">
              <Link
                to="https://www.linkedin.com/in/mathys-henneron-b9a879221/"
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin-in hover-color"></i>{" "}
              </Link>
              <Link
                to="https://github.com/MathysHnr"
                aria-label="GitHub Profile"
              >
                <i className="fa-brands fa-github hover-color"></i>
              </Link>
              <Link
                to="mailto:henneron.mathyss@gmail.com"
                aria-label="Send Email"
              >
                <i className="fa-solid fa-at hover-color"></i>
              </Link>
            </div>
          </div>
          <div className="contact__right">
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__input-container">
                <label htmlFor="name" className="contact__label">
                  Nom*
                </label>
                <input
                  id="name"
                  name="name"
                  className="contact__input"
                  type="text"
                  placeholder="NOM*"
                  required
                />
              </div>
              <div className="contact__input-container">
                <label htmlFor="email" className="contact__label">
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  className="contact__input"
                  type="email"
                  placeholder="EMAIL*"
                  required
                />
              </div>
              <div className="contact__input-container">
                <label htmlFor="phone" className="contact__label">
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="contact__input"
                  type="tel"
                  placeholder="TELEPHONE"
                />
              </div>
              <div className="contact__input-container">
                <label htmlFor="message" className="contact__label">
                  Message*
                </label>
                <textarea
                  id="message"
                  className="contact__input"
                  name="message"
                  placeholder="MESSAGE*"
                  rows="5"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                className="contact__button"
                value="Envoyer"
              />
            </form>
            {confirmationMessage && (
              <div className="confirmation-message">{confirmationMessage}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
