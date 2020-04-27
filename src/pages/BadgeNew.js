import React from "react";

import "./styles/BadgeNew.css";

//Cambio mi imagen y llamo esta nueva
import header from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
//Traemos el API ya que vamos a comenzar a hacer una llamada
import api from "../api";
class BadgeNew extends React.Component {
  state = {
    //Voy a inicializar mi loading, su estado inicial será false
    loading: false,
    //No comenzamos con un error por lo tanto será nulo
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
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
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      // En caso de que haya exito, queremos regresar automaticamente a la lista de badges (redirigir), lo que haremos será usar un prop que las páginas reciben, ya que las paginas se las estamos dando a las rutas de react router (match, history, location), en este caso usaremos history para redirigir a badges page
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: null, error: error });
    }
  };
  render() {
    //Lo que queremos regresar es el loader en el caso de que loading se encienda
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        {/* También podré usar operadores ternarios dentro del return del render para condicionales */}
        {/* {this.state.loading ? <PageLoading /> : <PageLoading />} */}
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
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
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                //Añadiré un error, en mi formulario, para validar si hay o no un error, es decir, lo que esté guardado en ese momento dentro del state de error
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
