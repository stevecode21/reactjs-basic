import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

//Importaremos mi componente app
import App from "./components/App";

const container = document.getElementById("app");

//En render ahora cambiaremos el componente para renderizar app, que es el componente desde donde manejaremos las rutas
ReactDOM.render(<App />, container);
