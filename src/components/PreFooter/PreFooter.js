import "./PreFooter.css";
import Button1 from "../Button1/Button1";

function PreFooter() {
  return (
    <div className="PF-container">
      <div className="PF-title sub-title">
        Usá nuestros algoritmos de Machine Learning para impulsar tu negocio
      </div>
      <div className="PF-btn-container">
        <Button1
          text="Aplicá ahora"
          color="white"
          border="1px solid #fff"
          onClick={() => (window.location.pathname = "/Contacto")}
        />
      </div>
    </div>
  );
}

export default PreFooter;
