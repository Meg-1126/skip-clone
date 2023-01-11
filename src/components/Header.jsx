import React from "react";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="wrapper__home">
          <a href="#" className="link__home">SKIP</a>
        </div>
        <button className="btn__bubble">Bubble</button>
        <button className="btn__menu">Menu</button>
      </header>
    </>
  );
}
