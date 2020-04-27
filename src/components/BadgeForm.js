import React from "react";

class BadgeForm extends React.Component {
  handleClick = (e) => {
    console.log("Button was clicked");
  };

  //No usaremos la función que habiamos declarado
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("form submitted");

  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        {/* Manejaré mi título desde el compinente pertinente si es un nuevo o uno existente a editar */}
        {/* <h1>New Attendant</h1> */}

        {/* Lo que haremos será usar el prop que va a manejar el cambio del submit */}
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>

            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              className="form-control"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          {/* Si existe este error, desplegaremos un error, si existe el error, (ES TRUE, tiene contenido, un objeto en este caso), entonces(&&) */}

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
