import React from "react";

import confLogo from "../images/badge-header.svg";

//Importo mi componente Gravatar
import Gravatar from "./Gravatar";

import "./styles/Badge.css";
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la Conferencia" />
        </div>
        <div className="Badge__section-name">
          {/* Reemplazamos la imagen por el componente */}
          <Gravatar
            className="Badge__avatar"
            //En lugar del src que tenia antes, lo que haré ahora será enviar un email
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
