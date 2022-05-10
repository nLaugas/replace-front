import "./Footer.css";
import GeneralLinkButton from "../GeneralLinkButton/GeneralLinkButton";

import pdf from "../../assets/docs/lorem-ipsum.pdf";

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
        {/* <GeneralLinkButton href="/Servicios" className="Footer-btn">
          Servicios
        </GeneralLinkButton> */}
        <GeneralLinkButton href="/CasosDeExito" className="Footer-btn">
          Casos de éxito
        </GeneralLinkButton>
        {/* <GeneralLinkButton href="/Proyectos" className="Footer-btn">
          Proyectos
        </GeneralLinkButton> */}
        <GeneralLinkButton href="/Contacto" className="Footer-btn">
          Contacto
        </GeneralLinkButton>
      </div>

      <div className="Footer-social-container">
        <a
          className="Footer-social"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./img/InstagramLogo.png"></img>
        </a>
        <a
          className="Footer-social"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./img/FacebookLogo.png"></img>
        </a>
        <a
          className="Footer-social"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./img/LinkedInLogo.png"></img>
        </a>
      </div>

      <div className="Footer-footer">
        <div>© 2021 Replace. Todos los derechos reservados.</div>
        <div>
          <a
            href={pdf}
            
            target="_blank"
            rel="noreferrer"
            className="btn-noselect"
          >
            Política de privacidad &nbsp;
          </a>
          <a
            href={pdf}
            
            target="_blank"
            rel="noreferrer"
            className="btn-noselect"
          >
            &nbsp;Política de Cookies&nbsp;
          </a>
          <a
            href={pdf}
            
            target="_blank"
            rel="noreferrer"
            className="btn-noselect"
          >
            &nbsp;Términos y Condiciones
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
