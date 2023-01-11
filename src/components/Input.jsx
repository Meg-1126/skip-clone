import React from "react";

export default function Input() {
  return (
    <div className="wrapper__input">
      <div className="wrapper__input__adress">
        <input className="input__address" required/>
        <button>locator</button>
      </div>
      <input className="input__apt__num"/>
      <input className="input__instruction"/>
      <button></button>
    </div>
  );
}
