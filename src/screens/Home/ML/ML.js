import react ,{useState} from "react";
import "./ML.css";
import ReplaceText from "../../../components/ReplaceText/ReplaceText";
import Button1 from "../../../components/Button1/Button1";
import Segmentacion from "./Segmentacion";
import MotorRecomendacion from "./MotorRecomendacion";
import DeteccionFraude from "./DeteccionFraude";
import PrediccionAbandono from "./PrediccionAbandono";

function ML() {

  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="ML-title-container">
        <div>
          <ReplaceText text="BENEFICIOS" style={{ textAlign: "start" }} />
          <div className="ML-title litle-title">
            Usá nuestros algoritmos de Machine Learning para impulsar tu negocio
          </div>
          <div className="ML-btn-container">
            <Button1 className={`ML-Button1 ${selected === 0 && "ML-Button1-focus"}`} onClick={() => setSelected(0)} text="Segmentación" />
            <Button1 className={`ML-Button1 ${selected === 1 && "ML-Button1-focus"}`} onClick={() => setSelected(1)} text="Motor de recomendacion" />
            <Button1 className={`ML-Button1 ${selected === 2 && "ML-Button1-focus"}`} onClick={() => setSelected(2)} text="Deteccion de fraude" />
            <Button1 className={`ML-Button1 ${selected === 3 && "ML-Button1-focus"}`} onClick={() => setSelected(3)} text="Predicción de abandono" />
          </div>
        </div>
      </div>

      {selected === 0 && <Segmentacion />}
      {selected === 1 && <MotorRecomendacion />}
      {selected === 2 && <DeteccionFraude />}
      {selected === 3 && <PrediccionAbandono />}

    </>
  );
}

export default ML;
