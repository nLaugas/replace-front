import Clustering from "../threejs/clustering";

const DeteccionFraude = () => {
  return (
    <div className="ML-content-container">
      <div className="ML-content">
        <div className="ML-content-title sub-title">DeteccionFraude</div>
        <div className="description">
          Usá Machine Learning para identificar clientes o transacciones
          fraudulentas.
        </div>
      </div>

      <div className="ML-canvas">
        <Clustering />
      </div>

      <div className="ML-content">
        <div className="ML-content-title sub-title">
          Adapta tu negocio y aumentá tus ventas
        </div>
        <div className="description">
          Conocé y cuantificá grupos de clientes para crear estrategias de
          negocio adaptadas a cada tipo cliente.
        </div>
      </div>
    </div>
  );
};

export default DeteccionFraude;
