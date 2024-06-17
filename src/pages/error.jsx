import React from "react";
import { Link } from "react-router-dom";

function Error() {
  <main>
    <div className="error">
      <h1>Erreur 404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/"> Revenir à la page d'accueil</Link>
    </div>
  </main>;
}

export default Error;
