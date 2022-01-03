import "./Input.css";
import React, { useState } from "react";

const Input = (props) => {

  const handleOnChange = e => {
    props.set(e.target.value);
    if(props.onChange != null){
      props.onChange();
    };
  }

  return (
    <div className="input" id={props.id}>
      <input
        type={props.type}
        className="input-field sub-title"
        onChange={handleOnChange}
        value={props.value}
        placeholder={props.placeholder}
      />
      <label 
        className={`input-label 
          ${(props.value || props.placeholder) && "input-label-valid" } 
          ${(props.placeholder && !props.value || (props.error)) && "input-field-error"}`}
      >
        {props.title}
      </label>
    </div>
  );
};

export default Input;
