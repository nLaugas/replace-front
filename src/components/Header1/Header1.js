import "../../App.css";
import "./Header1.css";

const Header1 = (props) => {

  return (
    <>
      <div
        
        className={`App Header1-container ${props.className}`}
        id="Header1"
      >
        {props.children}
      </div>
    </>
  );
};

export default Header1;
