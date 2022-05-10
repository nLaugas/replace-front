import "./Footer.css";
import GeneralLinkButton from "../GeneralLinkButton/GeneralLinkButton";
import pdf from "../../assets/docs/lorem-ipsum.pdf";

function Footer() {
  function scrollToTop() {
    window.scrollTo(0, window.screenTop);
  }

  return (
    <div className="Footer-container">
      <img src="./img/ReLogo.png" width="80" style={{ marginTop: "5vh" }}></img>
      <div className="Footer-btn-container">
        <GeneralLinkButton
          href="/"
          className="Footer-btn"
          onClick={scrollToTop}
        >
          Inicio
        </GeneralLinkButton>
        <GeneralLinkButton
          href="/Quienes_somos"
          className="Footer-btn"
          onClick={scrollToTop}
        >
          Quienes Somos
        </GeneralLinkButton>
        {/* <GeneralLinkButton href="/Servicios" className="Footer-btn" onClick={scrollToTop}>
          Servicios
        </GeneralLinkButton> */}
        <GeneralLinkButton
          href="/CasosDeExito"
          className="Footer-btn"
          onClick={scrollToTop}
        >
          Casos de éxito
        </GeneralLinkButton>
        {/* <GeneralLinkButton href="/Proyectos" className="Footer-btn" onClick={scrollToTop}>
          Proyectos
        </GeneralLinkButton> */}
        <GeneralLinkButton
          href="/Contacto"
          className="Footer-btn"
          onClick={scrollToTop}
        >
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
          href="https://www.linkedin.com/company/replaceit/"
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
            className="btn-noselect"
            target="_blank"
            rel="noreferrer"
          >
            Política de privacidad &nbsp;
          </a>
          <a
            href={pdf}
            className="btn-noselect"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;Política de Cookies&nbsp;
          </a>
          <a
            href={pdf}
            className="btn-noselect"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;Términos y Condiciones
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
