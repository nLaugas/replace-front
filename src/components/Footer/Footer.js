import "./Footer.css";
import GeneralLinkButton from "../GeneralLinkButton/GeneralLinkButton";

function Footer() {
  return (
    <div className="Footer-container">
      <img src="./img/ReLogo.png" width="80" style={{ marginTop: "5vh" }}></img>
      <div className="Footer-btn-container">
        <GeneralLinkButton href="/" className="Footer-btn">
          Inicio
        </GeneralLinkButton>
        <GeneralLinkButton href="/Quienes_somos" className="Footer-btn">
          Quienes Somos
        </GeneralLinkButton>
        <GeneralLinkButton href="/Equipo" className="Footer-btn">
          Equipo
        </GeneralLinkButton>
        <GeneralLinkButton href="/Proyectos" className="Footer-btn">
          Proyectos
        </GeneralLinkButton>
        <GeneralLinkButton href="/Contacto" className="Footer-btn">
          Contacto
        </GeneralLinkButton>
      </div>

      <div className="Footer-social-container">
        <a className="Footer-social" href="https://www.instagram.com">
          <img src="./img/InstagramLogo.png"></img>
        </a>
        <a className="Footer-social" href="https://www.facebook.com">
          <img src="./img/FacebookLogo.png"></img>
        </a>
        <a className="Footer-social" href="https://www.linkedin.com">
          <img src="./img/LinkedInLogo.png"></img>
        </a>
      </div>

      <div className="Footer-footer">
        <div>© 2021 Replace. Todos los derechos reservados.</div>
        <div>
          <div
            onClick={() => (window.location.pathname = "/Home")}
            className="btn-noselect"
          >
            Política de privacidad &nbsp;
          </div>
          <div
            onClick={() => (window.location.pathname = "/Home")}
            className="btn-noselect"
          >
            &nbsp;Política de Cookies&nbsp;
          </div>
          <div
            onClick={() => (window.location.pathname = "/Home")}
            className="btn-noselect"
          >
            &nbsp;Términos y Condiciones
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
