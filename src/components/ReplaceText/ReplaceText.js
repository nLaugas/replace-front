import "./ReplaceText.css";

const ReplaceText = (props) => {
  return (
    <div className="ReplaceText-container">
      <img src="./img/Corchete1.png"/>
      <div className="ReplaceText-text sub-description">{props.text}</div>
      <img src="./img/Corchete2.png" />
    </div>
  );
};

export default ReplaceText;
