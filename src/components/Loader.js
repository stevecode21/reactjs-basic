import React, { Component } from "react";

import "./styles/Loader.css";

export default class Loader extends Component {
  render() {
    return (
      // Usando mi CSS, lo que haré será crear una animación que desplega 9 puntos cambiando opacidad
      <div className="lds-grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
