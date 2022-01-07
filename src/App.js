import React, {useState} from 'react';
import "./index";
import "./TextFont.css";
import Home from "./screens/Home/Home";
import CDE from "./screens/CDE/CDE";
import Nav from "./components/Nav/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import PreFooter from "./components/PreFooter/PreFooter";
import Contacto from "./screens/Contacto/Contacto";
import Qs from './screens/Qs/Qs';

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
            <Qs/>
          </Route>
          <Route path="/Servicios">
            Servicios
          </Route>
          <Route path="/CasosDeExito">
            <CDE />
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
      <PreFooter/>
      <Footer />
    </Router>
    
  );
}

export default App;
