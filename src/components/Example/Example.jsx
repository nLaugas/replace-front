import React from "react";
import "./Example.css";
import Text1 from "../Text1/Text1";
import Button1 from "../Button1/Button1";
export default function Example(props) {
  return (
    <div className="examples-container">
      <Text1 className="example-info">
        <img src={props.partner} alt="" style={{ minWidth: "200px" }} />
        <div className="HeadText-description start description">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer cursus cursus augue, in ullamcorper ante volutpat vel. */}
          <div className="btn-example">
            <Button1
              text="Ver Caso"
              color="white"
              border="1px solid #fff"
              onClick={() => (window.location.pathname = "/CasosDeExito")}
            />
          </div>
        </div>
      </Text1>
      <img className="img" src={props.example} alt="" />
    </div>
  );
}
