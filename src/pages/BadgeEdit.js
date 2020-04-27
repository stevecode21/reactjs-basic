/*Este componente será muy similar a mi componente BadgeNew, por lo cual hice una copia pero solo le cambiaré algunas cosas rlevantes, como las clases de mis estilos, la Class Component y el export */
import React from "react";

import "./styles/BadgeEdit.css";

import header from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import api from "../api";
class BadgeEdit extends React.Component {
  state = {
    //Como vamos a empezar con una petición, mi loading será true, ya que lo que quiero es poder obtener los datos del badge de acuerdo a su id cuando desde BadgesList se seleccione uno para digirigirlo a esta pagina
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  //Cuando el componentDidMount ocurra, voy a comenzar a buscar los datos
  componentDidMount() {
    this.fetchData();
  }

  //Declaro la función y sabemos que cuando pedimos datos es una función asíncrona
  fetchData = async (e) => {
    //Empiezo el patrón de petición
    this.setState({ loading: true, error: null });

    //Intentamos hacer la petición o agarrar su error
    try {
      //read va a tomar el id del badge que nos interesa

      const data = await api.badges.read(
        //Para leer ese id hay una forma gracias a react-router, usando uno de los props que los routes le pasan a los componentes que es (match)
        //cada una de esas variables que insertarmos en el path que declaramos en la ruta lo pdoemos acceder dentro del objeto (params) y el que quiero será badgeId que fue el que declaré en el route
        this.props.match.params.badgeId
      );

      //Si los datos funcionan los vamos a guardar dentro del form, y declaramos el loading como terminado
      this.setState({ loading: false, form: data });
    } catch (error) {
      //Manejaremos el error cancelando el loading y enviando el error al estado
      this.setState({ loading: false, error: error });
    }
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      //Dandole manejo al submit, en este caso la petición será PUT, es decir update, la cual recibe un badgeId y la información que queremos actualizar
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: null, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              {/* Agregamos el titulo que eliminé en mi BadgeForm */}
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
