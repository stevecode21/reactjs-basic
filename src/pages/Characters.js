import React from "react";
// import ReactDOM from "react-dom";

import "./styles/Characters.css";
import logo from "../images/logo.png";

function CharacterCard(props) {
  const { character } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
    </div>
  );
}

class Character extends React.Component {
  state = {
    //Siempre que hay una petición hay 2 estados mas, loading y error, por lo tanto inicializamos los 2
    //Cuando nuestra app comienza, empiza buscando los datos
    loading: true,
    //Mi app no comienza con un error, por lo tanto lo dejaré nulo
    error: null,
    //data, representa la data, esto será un objeto, ya que es el resultado que me va a dar la API, la inicializamos como un oibjeto vacio
    data: {
      info: {},
      //Inicializamos los results vacio
      results: [],
    },
    nextPage: 1,
  };

  //Iniciare una llamada a mi API de Rick and Morty
  componentDidMount() {
    //Con este fetchCharacters inicializare mi API en mi montaje de componente
    this.fetchCharacters();
  }
  //Una llamada a una API es un proceso asincrono, es decir lo comenzamos pero no sabemos cuando va a acabar, por lo tanto escribiré una función asincrona
  //Fectch es una funcion que traen los navegadores que trae el lenguaje, si le paso una dirección de internet haré una petición GET
  fetchCharacters = async () => {
    //Cuando nuestro fetchCharacters, quiere decir que estamos cargando datos, lo enviamos al estado
    this.setState({ loading: true, error: null });

    //Vamos a hacer un try catch para intentar la petición o capturar el error si falla con Catch
    try {
      //Fetch me regresa una respuesta que almacenaré en esta variable
      const response = await fetch(
        //Cada que haga una petición lo que haré será pedir una página expecifica de acuerdo al valor
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      //Sacaré la data de esa respuesta usando response.json(), no olvidemos que será otra función asíncrona
      const data = await response.json();

      //Los datos, los quiero guardar, asi que donde mejor guardarlos, que en el estado de este componente
      this.setState({
        loading: false,

        data: {
          //Info lo vamos a reemplazar por lo que trae la data
          info: data.info,
          //Para no perder mis resultados anteriores, voy a concatenar los antiguos (this.state.data.results) y los nuevos (data.results)
          results: [].concat(this.state.data.results, data.results),
        },
        //Aumentaré el valor de la página que quiero cargar para cargar diferentes
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        //Mi loading en el error será falso para capturar mi error
        loading: false,
        //En el caso de que haya un error, capturaré el error
        error: error,
      });
    }
  };

  render() {
    //Si hay un error, en donde pongo un if validando si error está definido y retornaré un error
    if (this.state.error) {
      return "Error!";
    }

    return (
      <div className="container">
        <div className="App">
          <img src={logo} alt="Rick y Morty" className="Logo" />
          <ul className="row">
            {/* Por cada uno de estos resultados que representa un personaje, desplegaremos una tarjeta de ese personaje */}
            {this.state.data.results.map((character) => (
              <li className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
          {/* Para enseñar el loader cuando inicio mi petición, haré una condición. Si this.state está loading, entonces (&&) quiero enseñar un mensaje de Loading*/}

          {this.state.loading && <p className="text-center">Loading...</p>}

          {/* Con este botón cargaré mas personajes, pero solo lo quiero enseñar cuando no esté loading la aplicación  */}
          {!this.state.loading && this.state.data.info.next && (
            //onClick hará que pida mas personajes, pero como no quiero pasarle argumentos, lo llamo con una función flecha
            <button onClick={() => this.fetchCharacters()}>Load More</button>
          )}
        </div>
      </div>
    );
  }
}

export default Character;
