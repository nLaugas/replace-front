import React, {useState} from 'react';
import "./index";
import "./TextFont.css";
import Home from "./screens/Home/Home";
import Nav from "./components/Nav/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Contacto from "./screens/Contacto/Contacto";

function App() {

  return (
    <Router>
      <Nav />
      <div className="MainContent">
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Quienes_Somos">
            quienes somos
          </Route>
          <Route path="/Servicios">
            Servicios
          </Route>
          <Route path="/CasosDeExito">
            Casos de exito!!!
          </Route>
          <Route path="/Proyectos">
            Proyectos
          </Route>
          <Route path="/Contacto">
            <Contacto />
          </Route>
          <Redirect from="/*" to="Home" />
        </Switch>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
