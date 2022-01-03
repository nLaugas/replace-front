import Clustering from "../threejs/clustering";

const Segmentacion = () => {
  return (
    <div className="ML-content-container">
      <div className="ML-content">
        <div className="ML-content-title sub-title">Segmentación</div>
        <div className="description">
          Usá Machine Learning para identificar grupos de clientes con
          comportamientos similares.
        </div>
      </div>

      <div className="ML-canvas">
        <Clustering />
      </div>

      <div className="ML-content">
        <div className="ML-content-title sub-title">
          Adapta tu negocio y aumentá tus ventas{" "}
          {/* Aumentá tus ventas con personalización a nivel de segmento. */}
        </div>
        <div className="description">
          Conocé y cuantificá grupos de clientes para crear estrategias de
          negocio adaptadas a cada tipo cliente.{" "}
          {/* Conocé y cuantificá segmentos de clientes con un perfil específico para crear estrategias de negocio personalizadas. */}
        </div>
      </div>
    </div>
  );
};

export default Segmentacion;
