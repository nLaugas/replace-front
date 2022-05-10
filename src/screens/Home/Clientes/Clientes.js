import "./Clientes.css";
import React from "react";

function Clientes() {
  let scrollCompleted = 0;

  const slide = (direction) => {
    var container = document.getElementById("clientes");
    scrollCompleted = 0;

    var slideVar = setInterval(function () {
      if (direction == "left") {
        container.scrollLeft -= 15;
        console.log("LEFT");
      } else {
        container.scrollLeft += 15;
        console.log("RIGHT");
      }
      scrollCompleted += 10;
      if (scrollCompleted >= 200) {
        window.clearInterval(slideVar);
      }
    }, 15);
  };

  return (
    <div className="Clientes-container">
      <div
        className="Arrow left btn-noselect"
        onClick={() => {
          slide("left");
        }}
      />
      <div className="Clientes-title sub-title">Clientes</div>

      <div>
        <div className="Cliente-container" id="clientes">
          <div className="Clientes-CubeA"></div>
          <img src="/img/errepar-logo.png" className="Cliente description" />
          <img src="/img/itbc-logo.png" className="Cliente description" />
          <img
            src="/img/partnersLogo/intermedia.png"
            className="Cliente description imgCarrousel"
          />
          <img
            src="/img/partnersLogo/Adviters.png"
            className="Cliente description imgCarrousel"
          />
          <img
            src="/img/partnersLogo/TISA.png"
            className="Cliente description imgCarrousel"
          />
          <div className="Clientes-CubeB"></div>
        </div>
      </div>

      <div
        className="Arrow right btn-noselect"
        onClick={() => {
          slide();
        }}
      />
    </div>
  );
}

export default Clientes;
