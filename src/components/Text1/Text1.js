import "./Text1.css";

function Text1(props) {
  return (
    <div className={`Text1-container ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Text1;
