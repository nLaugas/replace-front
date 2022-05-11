import "./Clientes.css";
import React from "react";
import Slider from "react-slick";

function Clientes() {
  
  let scrollCompleted = 0;

  const slide = (direction) => {
    var container = document.getElementById("clientes");
    scrollCompleted = 0;

    var slideVar = setInterval(function () {
      if (direction == "left") {
        container.scrollLeft -= 20;
        console.log("LEFT");
      } else {
        container.scrollLeft += 20;
        console.log("RIGHT");
      }
      scrollCompleted += 20;
      if (scrollCompleted >= 260) {
        window.clearInterval(slideVar);
      }
    }, 10);
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="Arrow right btn-noselect"
        //className={className}
        //style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="Arrow left btn-noselect"
        //className={`${className} Arrow left btn-noselect`}
        //style={{ ...style, }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true, 
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <div className="Clientes-container">
      <div className="Clientes-title sub-title">Clientes</div>
      <Slider {...settings}>
          
          <img src="/img/partnersLogo/errepar-logo.png" className="imgCarrousel" />
          <img src="/img/partnersLogo/itbc-logo.png" className="imgCarrousel" />
          <img
            src="/img/partnersLogo/intermedia.png"
            className="imgCarrousel"
          />
          <img
            src="/img/partnersLogo/Adviters.png"
            className="imgCarrousel"
          />
          <img
            src="/img/partnersLogo/TISA.png"
            className="imgCarrousel"
          />
      </Slider>
    </div>
  );
}

export default Clientes;

{/*<div
        className="Arrow left btn-noselect"
        onClick={() => {
          slide("left");
        }}
      />
      <div className="Clientes-title sub-title">Clientes</div>
      
        <div className="Cliente-container" id="clientes">
          <div className="Clientes-CubeA"></div>
          <img src="/img/partnersLogo/errepar-logo.png" className="imgCarrousel" />
          <img src="/img/partnersLogo/itbc-logo.png" className="imgCarrousel" />
          <img
            src="/img/partnersLogo/intermedia.png"
            className="imgCarrousel"
          />
          <img
            src="/img/partnersLogo/Adviters.png"
            className="imgCarrousel"
          />
          <img
            src="/img/partnersLogo/TISA.png"
            className="imgCarrousel"
          />
          <div className="Clientes-CubeB"></div>
      </div>

      <div
        className="Arrow right btn-noselect"
        onClick={() => {
          slide();
        }}
      />*/}