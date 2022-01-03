import { useState, useEffect } from "react";
import "./Nav.css";
import GeneralLinkButton from "../GeneralLinkButton/GeneralLinkButton";

function Nav() {

  const [showNavbar, setshowNavbar] = useState(false);

  const [OnScreen, setOnScreen] = useState(0);

  useEffect(() => {
    if(window.location.pathname === "/Home" || window.location.pathname === "/undefined") setOnScreen(0);
    if(window.location.pathname === "/Quienes_somos") setOnScreen(1);
    if(window.location.pathname === "/Servicios") setOnScreen(2);
    if(window.location.pathname === "/CasosDeExito") setOnScreen(3);
    if(window.location.pathname === "/Proyectos") setOnScreen(4);
    if(window.location.pathname === "/Contacto") setOnScreen(5); 
  });

  return (
    <div>
      <div className="Nav-container">
        <div className="Nav-img-container">
            <GeneralLinkButton href="/Home" className="Nav-align-center"><img className="Nav-img" src="./img/Group.png"/></GeneralLinkButton>
          <img
            onClick={() => setshowNavbar(!showNavbar)}
            className="Nav-responsiveMenu-btn btn-noselect"
            src="./img/Nav-responsive-btn.png"
            id="Nav-responsiveMenu-btn"
          ></img>
        </div>
        <div className={`Nav-btn-container ${showNavbar ? "" : "NoHeight"}`}>
          <GeneralLinkButton href="/Home" className={`Nav-btn ${OnScreen === 0 ? "Nav-btn-InScreen" : ""}`}>
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
