import { useEffect, useState } from "react";
import "./Button1.css";
// btn-hover-
const Button1 = (props) => {
  const [hoverColor, setHoverColor] = useState("");

  useEffect(() => {
    if (props.color == "white") setHoverColor("btn-hover-white");
    else setHoverColor("btn-hover-black");
  }, []);

  return (
    <button
      onClick={props.onClick}
      className={"btn-noselect description Button1-btn " + hoverColor + " " + props.className}
      style={{
        color: props.color,
        border: props.border,
      }}
    >
      {props.text}
    </button>
  );
};

export default Button1;
