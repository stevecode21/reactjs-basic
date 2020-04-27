import React from "react";

import "./styles/NotFound.css";

import Astronaut from "../images/astronaut-dog-svgrepo-com.svg";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="Background__NotFound">
      <div className="container">
        <div className="row">
          <div className="Notfound__col col-12 col-md-6">
            <h1 className="m-4">
              ¡Ups! Nuestros científicos no han podido localizar el portal que
              escogiste
            </h1>
            <p className="m-2">
              Si crees que se trata de un error, regresa en el tiempo
            </p>
            <Link className="btn btn-primary mt-3" to="/">
              Regresar en el tiempo
            </Link>
          </div>
          <div className="Home__col d-none d-md-block col-md-6">
            <img
              src={Astronaut}
              alt="Page Not Found"
              className="img-fluid p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
