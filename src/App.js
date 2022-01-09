import React, { useState } from 'react';
import "./index";
import "./TextFont.css";
import Home from "./screens/Home/Home";
import CDE from "./screens/CDE/CDE";
import Nav from "./components/Nav/Nav";
import { Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import PreFooter from "./components/PreFooter/PreFooter";
import Contacto from "./screens/Contacto/Contacto";
import Qs from './screens/Qs/Qs';

function App() {

  return (
    <>
      <Nav />
      <div className="MainContent">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/Quienes_Somos" element={<Qs />} />
          <Route path="/Servicios" />
          <Route path="/CasosDeExito" element={<CDE />} />
          <Route path="/Proyectos" />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
      <PreFooter />
      <Footer />
    </>

  );
}

export default App;
