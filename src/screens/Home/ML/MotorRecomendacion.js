import Clustering from "../threejs/clustering";

const MotorRecomendacion = () => {
  return (
    <div className="ML-content-container">
      <div className="ML-content">
        <div className="ML-content-title sub-title">Motor de recomendación</div>
        <div className="description">
        Nuestro motor de recomendación predice la preferencia del cliente hacia aquellos productos que nunca
          consumio basandose en su historial de consumo y en el de todos tus clientes.
        </div>
      </div>

      <div className="ML-canvas">
        <img src="img/MotorRecomendacion.gif" width="800px"></img>
      </div>

      <div className="ML-content">
        <div className="ML-content-title sub-title">
          Adapta tu negocio y aumentá tus ventas
        </div>
        <div className="description">
          Al conocer la posible preferencia de cada usuario podes adaptar tu negocio ofreciendoles
          los productos que desconocen con mayor probabilidad de ser consumido y asi aumentar tus ventas.
          
        </div>
      </div>
    </div>
  );
};

export default MotorRecomendacion;
