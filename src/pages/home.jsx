import React from "react";
import Profil from "../components/profil/profil";
import Info from "../components/info/info";
import Competence from "../components/competence/competence";
import Portfolio from "../components/portfolio/porfolio";
import Contact from "../components/contact/contact";

function Home() {
  return (
    <main>
      <Profil />
      <Info />
      <Competence />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default Home;
