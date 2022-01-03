import "./Business.css";
import ReplaceText from "../../../components/ReplaceText/ReplaceText";
import Button1 from "../../../components/Button1/Button1";

function Business(props){
  return(
    <div className="Business-container" id="business">
        <ReplaceText text="MAXIMIZÁ INGRESOS"/>
        <div className="Business-title title">
          Expandi tu negocio con tus datos
        </div>
        <div className="Business-description description">
          Aplicá Big Data y Data Science para crear 
          sistemas automatizados que maximicen tus ingresos.
        </div>
        <Button1 onClick={() => (window.location.pathname = "/Contacto")} text="Aplicá ahora"/>
      </div>
  );
}

export default Business;