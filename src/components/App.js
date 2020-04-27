import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import BadgeDetails from "../pages/BadgeDetailsContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          {/* Creo mi ruta para los detalles del Badge */}
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />

          {/* Esta ruta me permitirá redireccionar a 404 que es el componente que permitirá mostrar un página con un mensaje de error cuando no se ha encontrado la página especificada */}
          {/* <Route component={NotFound} /> */}
          {/* <Route exact path="/characters" component={Character} /> */}
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
