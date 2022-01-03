import "./Contacto.css";
import ReplaceText from "../../components/ReplaceText/ReplaceText";
import ContactoForm from "./ContactoForm";
import Header1 from "../../components/Header1/Header1";
import Text1 from "../../components/Text1/Text1";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import PreFooter from "../Home/PreFooter/PreFooter";

const Contacto = () => {
  const postUrl = `https://gmail.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
    <Header1 className="Header1-NoRadius">
      <Text1 className="Contacto-formContainer">
        <ReplaceText text="CONTACTO" />
        <div className="title start Contacto-title">Contacte con nosotros</div>
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <ContactoForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </Text1>
      <Text1 className="start description">
        <div className="ContactoData-container">
          <div className="ContactoData-title">Email</div>
          <div className="Contacto-greyColor">hello@replace.com.ar</div>
        </div>
        <div className="ContactoData-container">
          <div className="ContactoData-title">Teléfono</div>
          <div className="Contacto-greyColor">+54 223 506 4735</div>
        </div>
        <div className="ContactoData-container">
          <div className="ContactoData-title">Dirección</div>
          <div className="Contacto-greyColor">Argentina,</div>
          <div className="Contacto-greyColor">Buenos Aires,</div>
          <div className="Contacto-greyColor">San Juan 2853</div>
        </div>
      </Text1>
      
    </Header1>
    <div className="Contacto-mapa-container">
      <img className="mapa" src="./svg/mapa.svg"></img>
      <img className="punto-mapa" src="./svg/punto-mapa.svg"></img>
    </div>
    <PreFooter/>
    </>
  );
};

export default Contacto;
