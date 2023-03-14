import React from "react";
import Header from "./Header";
import Input from "./Input";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Hero() {
  const goDown = () => {
    const element = document.getElementById("wrapper__indicator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div id="hero__img">
        <Header />
        <div className="hero__text">
          <p className="hero__keyword">Did somebody say Skip?</p>
          <Input />
          <div className="btn__down" onClick={goDown}>
            <RiArrowDownSLine size={44} color="#979692" />
          </div>
        </div>
      </div>
    </>
  );
}
