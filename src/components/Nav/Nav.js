import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Nav.css";
import GeneralLinkButton from "../GeneralLinkButton/GeneralLinkButton";

function Nav() {

  const [showNavbar, setshowNavbar] = useState(false);

  const [OnScreen, setOnScreen] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if(location.pathname === "/" || location.pathname === "/undefined") setOnScreen(0);
    if(location.pathname === "/Quienes_somos") setOnScreen(1);
    if(location.pathname === "/Servicios") setOnScreen(2);
    if(location.pathname === "/CasosDeExito") setOnScreen(3);
    if(location.pathname === "/Proyectos") setOnScreen(4);
    if(location.pathname === "/Contacto") setOnScreen(5); 
  });

  return (
    <div>
      <div className="Nav-container">
        <div className="Nav-img-container">
            <GeneralLinkButton href="/" className="Nav-align-center"><img className="Nav-img" src="./img/Group.png"/></GeneralLinkButton>
          <img
            onClick={() => setshowNavbar(!showNavbar)}
            className="Nav-responsiveMenu-btn btn-noselect"
            src="./img/Nav-responsive-btn.png"
            id="Nav-responsiveMenu-btn"
          ></img>
        </div>
        <div className={`Nav-btn-container ${showNavbar ? "" : "NoHeight"}`}>
          <GeneralLinkButton href="/" className={`Nav-btn ${OnScreen === 0 ? "Nav-btn-InScreen" : ""}`}>
            Inicio
          </GeneralLinkButton>
          <GeneralLinkButton href="/Quienes_somos" className={`Nav-btn ${OnScreen === 1 ? "Nav-btn-InScreen" : ""}`}>
            Quienes somos
          </GeneralLinkButton>
          <GeneralLinkButton href="/Servicios" className={`Nav-btn ${OnScreen === 2 ? "Nav-btn-InScreen" : ""}`}>
            Servicios
          </GeneralLinkButton>
          <GeneralLinkButton href="/CasosDeExito" className={`Nav-btn ${OnScreen === 3 ? "Nav-btn-InScreen" : ""}`}>
            Casos de éxito
          </GeneralLinkButton>
          <GeneralLinkButton href="/Proyectos" className={`Nav-btn ${OnScreen === 4 ? "Nav-btn-InScreen" : ""}`}>
            Proyectos
          </GeneralLinkButton>
          <GeneralLinkButton href="/Contacto" className={`Nav-btn ${OnScreen === 5 ? "Nav-btn-InScreen" : ""}`}>
            Contacto
          </GeneralLinkButton>
        </div>
      </div>
    </div>
  );
}

export default Nav;
