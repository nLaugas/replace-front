import "./Text.css";
import ReplaceText from "../../../components/ReplaceText/ReplaceText";
import Button1 from "../../../components/Button1/Button1";
import { Route } from "react-router";
import Text1 from "../../../components/Text1/Text1";

function Text() {
  const move = () => {
    var element = document.getElementById("business");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Text1>
      <ReplaceText text="POTENCIÁ TU NEGOCIO" />
      <div className="title start">
        Algoritmos para impactar en tu negocio
      </div>

      <div className="HeadText-description start description">
        Organiza tus datos, enriquecelos con datos externos, y realiza
        predicciones en escala con nuestros algoritmos de Inteligencia
        Artificial
      </div>

      <div className="HeadText-btn-container start">
        <Button1
          onClick={move}
          text="Conocer más"
          color="white"
        />
      </div>
    </Text1>
  );
}

export default Text;
