import "./ContactoForm.css";

const ContactoForm = () => {
  return (
    <form className="ContactoForm-container start sub-title">
      <div className="ContactoForm-inputContainer">
        <label>Nombre y Apellido*</label>
        <input type="" className="ContactoForm-input sub-title"/>
      </div>
      <div className="ContactoForm-inputContainer">
        <label>Empresa*</label>
        <input type="" className="ContactoForm-input sub-title"/>
      </div>
      <div className="ContactoForm-inputContainer">
        <label>Email corporativo*</label>
        <input type="" className="ContactoForm-input sub-title"/>
      </div>
    </form>
  );
};

export default ContactoForm;
