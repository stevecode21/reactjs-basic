import React from "react";

//Importaremos los estilos para mi Page Loading
import "./styles/PageLoading.css";

//Llamo mi componente donde estoy animando el loader
import Loader from "./Loader";

//Creamos una función que no recibe ningun prop
function PageLoading() {
  // Agrego mi div con la clase de mi CSS para centrarlo
  return (
    <div className="PageLoading">
      {/* Aqui mostraré el componente Loader */}
      <Loader />
    </div>
  );
}

export default PageLoading;
