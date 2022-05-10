import "./GeneralLinkButton.css";
import { Link } from "react-router-dom";
const GeneralLinkButton = (props) => {
  return (
    <Link
      className={`btn-noselect ${props.className}`}
      to={`${props.href}`}
      {...props}
    >
      {props.children}
    </Link>
  );
};

export default GeneralLinkButton;
