import React from "react";

//Importo la libreria para poder sacar el valor md5 hash del email
import md5 from "md5";

//Será funcion ya que no tendrá ningún estado
function Gravatar(props) {
  //Leeremos el email que llegan en los props
  const email = props.email;

  //Aquí extraigo mi código hash
  const hash = md5(email);

  return (
    //Le paso las clases por props
    <img
      className={props.className}
      //   Devolveré mi avatar, pero de acuerdo al hash generado
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
}

export default Gravatar;
