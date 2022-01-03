import "./GeneralLinkButton.css";

const GeneralLinkButton = (props) => {
  return (
    <div
      onClick={() => (window.location.pathname = `${props.href}`)}
      className={`btn-noselect ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default GeneralLinkButton;
