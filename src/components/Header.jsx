import React from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { SiAircanada } from "react-icons/si";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="wrapper__home">
          <p>
            <BsFillHouseDoorFill className="icon-house" />
          </p>
          <p className="skip">SKIP</p>
        </div>
        <div className="right-menu">
          <div className="btn__bubble">
            <div className="header-bubble">
              <IoChatbubbleEllipsesSharp
                color="white"
                className="icon-bubble"
              />
            </div>
            <p className="header-help">
              Need Help?
            </p>
            <div className="header-icon-country">
              <SiAircanada color="white" size={24} className="icon-country"/>
            </div>
          </div>
          <div className="btn__menu">
            <div className="header-user">
              <FaUserCircle color="lightgray" size={40} />
            </div>
            <p className="header-login">
              Log In
            </p>
            <button className="header-signup">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
