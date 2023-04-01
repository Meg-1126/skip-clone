import React from "react";
import { AiFillApple } from "react-icons/ai";
import { RiGooglePlayFill } from "react-icons/ri";

export default function Download() {
  return (
    <div className="wrapper__dl">
      <div className="wrapper__dl__inner">
        <div className="wrapper__dl__imgwrap">
          <img
            src="./images/mobile-en.png"
            className="img__sp"
            alt="Two smartphones"
          />
          <img
            src="./images/desktop-en.png"
            className="img__desktop"
            alt="Two smartphones"
          />
        </div>
        <div className="wrapper__dl__text">
          <h2 className="h2__dl">
            Download <br />
            Our App
          </h2>
          <p className="p__dl">
            Our app gives you access to your favourite restaurants. Get your
            food delivered right to you.
          </p>
          <div className="wrapper__dl__btns">
            <div className="btn__dl btn__dl__apple">
              <div className="btn__icon">
                <AiFillApple size={26} />
              </div>
              <div className="btn__dl__txt">
                <p className="btn__dl__txt__1">Download on the</p>
                <p className="btn__dl__txt__2">App Store</p>
              </div>
            </div>
            <div className="btn__dl btn__dl__google">
              <div className="btn__icon">
                <RiGooglePlayFill size={28} />
              </div>
              <div className="btn__dl__txt">
                <p className="btn__dl__txt__1">GET IT ON</p>
                <p className="btn__dl__txt__2">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
