import React from "react";
import "./CDE.css";
import ReplaceText from "../../components/ReplaceText/ReplaceText";
import Header1 from "../../components/Header1/Header1";
import Text1 from "../../components/Text1/Text1";
import Example from "../../components/Example/Example";
export default function CDE() {
  return (
    <div className="cde-container">
      <Header1 className="Header1-NoRadius">
        <Text1>
          <ReplaceText text="EXITO" />
          <div className="title start">Casos de exito</div>
          <div className="HeadText-description start description">
            Más información sobre los algoritmos de Inteligencia Artificial y
            Machine Learning
          </div>
        </Text1>
      </Header1>
      <Example partner="/img/errepar-logo-2.png" example="/img/example-1.png" />
      <Example partner="/svg/image 2.svg" example="/img/example-2.png" />
    </div>
  );
}
