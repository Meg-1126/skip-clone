import React from "react";
import Header from "./Header";
import Input from "./Input";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Hero() {
  return (
    <>
      <div className="hero__img">
        <Header />
        <div className="hero__text">
          <p className="hero__keyword">Did somebody say Skip?</p>
          <Input />
          <div className="btn__down">
            <RiArrowDownSLine size={44} color="#979692" />
          </div>
        </div>
      </div>
    </>
  );
}
