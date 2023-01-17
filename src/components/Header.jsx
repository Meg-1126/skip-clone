import React from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="wrapper__home">
          <a href="#" className="link__home">
            <BsFillHouseDoorFill />
            SKIP
          </a>
        </div>
        <div className="btn__bubble">
          <IoChatbubbleEllipsesSharp color="white" size={33}/>
        </div>
        <div className="btn__menu">
          <FaUserCircle color="lightgray" size={40}/>
        </div>
      </header>
    </>
  );
}
