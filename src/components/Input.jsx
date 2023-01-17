import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { RiUserLocationFill } from "react-icons/ri";

export default function Input() {
  return (
    <div className="wrapper__input">
      <div className="wrapper__input__address">
        <div className="icon__user">
        <RiUserLocationFill size={20}/>
        </div>
        <input
          className="input__address"
          required
          placeholder="Enter Your Address"
        />
        <div className="btn__locator">
          <BiCurrentLocation size={30}/>
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
      <button className="btn__find">Find Restaurants Nearby</button>
    </div>
  );
}
