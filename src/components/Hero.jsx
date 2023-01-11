import React from "react";
import Input from "./Input";

export default function Hero() {
  return (
    <>
      <div className="hero__img">
        <div className="hero__text">
          <p>Did somebody say Skip?</p>
          <Input/>
          <button>arrow</button>
        </div>
      </div>
    </>
  );
}
