import { useState } from "react";
import "./Spinner.css";

// Can be a string as well. Need to ensure each key-value pair ends with ;

function Spinner(props) {
  let loadingClass = props.isLoading
    ? ""
    : "Spinner-container-hide";

  let tam = 150;

  if (window.innerWidth < 1000) tam = 80;

  return (
    <div className={`Spinner-container ${loadingClass}`}>
      <div style={{height: tam}} className="Spinner-Animation-container">
        <img height={tam} src="/svg/ReLogo.svg" className="ReLogoAnim" />
        <div className="PlaceAnim-container">
          <img height={tam * 0.48} src="/svg/L.svg" className="LAnim" />
          <img height={tam * 0.6} src="/svg/Pace.svg" className="PaceAnim" />
        </div>
      </div>
    </div>
  );
}

export default Spinner;
