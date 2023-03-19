import React, { useEffect } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { RiUserLocationFill } from "react-icons/ri";

export default function Input() {
  // console.log(width);
  let width;
  useEffect(()=> {
    document.addEventListener("resize", (event) => {
      width = window.outerWidth;
      console.log("resize", width);
    });
  },[])
  return (
    <div className="wrapper__input">
      <div className="wrapper__input__address">
        <div className="icon__user">
          <RiUserLocationFill className="userLocation" />
        </div>
        <input
          className="input__address"
          required
          placeholder="Enter Your Address"
        />
        <div className="btn__locator">
          <BiCurrentLocation className="currentLocation" />
        </div>
      </div>
      <div className="wrapper__input__optional">
        <input
          className="input__apt__num"
          placeholder="Apt / Unit Number (optional)"
        />
        <input
          className="input__instruction"
          placeholder="Delivery Instruction (optional)"
        />
      </div>
      {width >= 960 ? (
        <button className="btn__find">Find Restaurants In Your Area</button>
      ) : (
        <button className="btn__find">Find Restaurants Nearby</button>
      )}
      {/* <button className="btn__find">Find Restaurants Nearby</button> */}
    </div>
  );
}
