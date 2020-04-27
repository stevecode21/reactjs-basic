import React from "react";
import "./styles/PageError.css";
//Creeo una funcion a la cual le estoy pasando un props que viene desde mi componente Badges.js
function PageError(props) {
  //Retorno mi error
  return (
    <div className="PageError">
      {/* Evaluo el error del mensaje y lo muestro en un div que tiene estilos */}
      ❌{props.error.message}😥
    </div>
  );
}
export default PageError;
