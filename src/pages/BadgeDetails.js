import React from "react";
import { Link } from "react-router-dom";

import ConfLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import "./styles/BadgeDetails.css";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

/**Crearemos un Hook Propio, por lo general siempre se llama con use al inicio en el nombre */
//Le vamos a pasar un parámetro el cual será el numero máximo
function useIncreaseCount(max) {
  //Recupero mi estado y lo dejo inicialiado siempre en 0
  const [count, setCount] = React.useState(0);

  //Si el conteo es mayor al máximo establecido, cambiaremos el valor de regreso a 0
  if (count > max) {
    setCount(0);
  }

  //Siempre terminamos regresando el arreglo de los 2 valores
  return [count, setCount];
}

function BadgeDetails(props) {
  /**Aquí usaré HOOKS, el cual viene junto con React */

  //Esta función nos va a regresar dos argumentos, los cuales lo vamos a recibir dentro de las llaves cuadradas, nos devolverá un arreglo
  //Es similar a count = state setCount=setState, adicionalmente la función se le puede dar un argumento opcional para inicializar el estadom en este caso, mi count será igual a 0

  // const [count, setCount] = React.useState(0);

  //Usando mi propio hooks recibo mi count y mi setCount desde mi propio hooks
  const [count, setCount] = useIncreaseCount(4);

  const badge = props.badge;

  //Inicializamos mi contador count
  // const count = 3;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={ConfLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              {/* Creo un boton con el fin de que cuando se oprima llame una función que finalmente incrementará el count, gracias a que setCount modifica el valor inicial de mi count diciendole en el argumento que sea de 1 en 1 */}
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
                className="btn btn-primary mr-4"
              >
                Increase Count: {count}
              </button>

              <Link
                className="btn btn-primary mb-4"
                to={`/badges/${badge.id}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>

              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
