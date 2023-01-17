import React from "react";
import { AiFillApple } from "react-icons/ai";
import { RiGooglePlayFill } from "react-icons/ri";

export default function Download() {
  return (
    <div className="wrapper__dl">
      <img
        src="./images/mobile-en.png"
        className="img__sp"
        alt="Two smartphones"
      />
      <h2>Download Our App</h2>
      <p>
        Our app gives you access to your favourite restaurants. Get your food
        delivered right to you.
      </p>
      <div className="wrapper__dl__btns">
        <div className="btn__dl__apple">
          <div>
            <AiFillApple />
          </div>
          <p>Download on the</p>
          <p>App Store</p>
        </div>
        <div className="btn__dl__google">
          <div>
            <RiGooglePlayFill />
          </div>
          <p>GET IT ON</p>
          <p>Google Play</p>
        </div>
      </div>
    </div>
  );
}
