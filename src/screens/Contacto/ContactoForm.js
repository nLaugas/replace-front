import "./ContactoForm.css";
import Input from "./Input";
import Button1 from "../../components/Button1/Button1";
import react, { useState, useEffect } from "react";

const ContactoForm = ({ status, message, onValidated }) => {
  const [NyPValue, setNyPValue] = useState("");
  const [EmailValue, setEmailValue] = useState("");
  const [MotivoValue, setMotivoValue] = useState("");

  const [NyPPlaceholder, setNyPPlaceholder] = useState("");
  const [EmailPlaceholder, setEmailPlaceholder] = useState("");
  const [MotivoPlaceholder, setMotivoPlaceholder] = useState("");

  const [EmailTitle, setEmailTitle] = useState("Email");
  const [EmailError, setEmailError] = useState("");

  const [RadioButtonValue, setRadioButtonValue] = useState(0);

  const SubmitHandler = (ev) => {
    ev.preventDefault();

    let counter = 0;
    if (MotivoValue) {
      counter++;
    } else setMotivoPlaceholder("Ingrese un motivo");

    var re = /\S+@\S+\.\S+/;
    if (re.test(EmailValue)) {
      //Es mail
      setEmailTitle("Email");
      setEmailError("");
      counter++;
    } else {
      //No es mail
      setEmailPlaceholder("Ingrese un Email");
      setEmailTitle("Email incorrecto (ej. algo@algo.com)");
      if (window.innerWidth < 500) {
        setEmailTitle("Email incorrecto");
        setEmailPlaceholder("ej. algo@algo.com");
      }

      setEmailError("error");
    }

    if (NyPValue) {
      counter++;
    } else setNyPPlaceholder("Ingrese un nombre y apellido");

    if (counter === 3) {
      //TODOS LOS CAMPOS ESTAN LLENOS
      console.log("Exitoso");

      //AGREGAR MAILCHIMP

      let quiero = "nada";
      if(RadioButtonValue == 0){
        quiero = "Contactar al equipo de ventas";
      }
      else quiero = "Más información sobre los algoritmos de Inteligencia Artificial y             Machine Learning";

      onValidated({
        MERGE1: NyPValue,
        MERGE0: EmailValue,
        MERGE2: MotivoValue,
        MERGE3: quiero,
      });

      setRadioButtonValue(0);
    }
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setNyPValue("");
    setEmailValue("");
    setMotivoValue("");
    setNyPPlaceholder("");
    setEmailPlaceholder("");
    setMotivoPlaceholder("");
  };

  const EmailChangeHandler = () => {
    setEmailError("");
  };

  return (
    <form className="card-form start sub-title" onSubmit={SubmitHandler}>
      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}

      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <Input
        type="text"
        title="Nombre y Apellido"
        id="NyP"
        set={setNyPValue}
        value={NyPValue}
        placeholder={NyPPlaceholder}
      />
      <Input
        type="text"
        title={EmailTitle}
        id="Email"
        set={setEmailValue}
        value={EmailValue}
        placeholder={EmailPlaceholder}
        error={EmailError}
        onChange={EmailChangeHandler}
      />
      <Input
        type="text"
        title="Motivo"
        id="Motivo"
        set={setMotivoValue}
        value={MotivoValue}
        placeholder={MotivoPlaceholder}
      />

      <div className="ContactoForm-Quiero Contacto-greyColor description">
        Quiero

        <div className="ContactoForm-Quiero-RBContainer" onClick={() => {setRadioButtonValue(0)}}>
          <div className={`ContactoForm-Quiero-RB ${RadioButtonValue === 0 && "ContactoForm-Quiero-RB-selected"}`}></div>
          <span>Contactar al equipo de ventas</span>
        </div>
        
        <div className="ContactoForm-Quiero-RBContainer" onClick={() => {setRadioButtonValue(1)}}>
          <div className={`ContactoForm-Quiero-RB ${RadioButtonValue === 1 && "ContactoForm-Quiero-RB-selected"}`}></div>
          <span>
            Más información sobre los algoritmos de Inteligencia Artificial y
            Machine Learning
          </span>
        </div>
      </div>
      <div className="ContactForm-btn-container">
        <Button1 text="Enviar" color="white" />
      </div>
    </form>
  );
};

export default ContactoForm;
