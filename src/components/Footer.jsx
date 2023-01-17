import React from "react";
// import { FaBeer } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { SiAircanada } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="footer__link1">
        <ul className="footer__link1__left"></ul>
        <ul className="footer__link1__right"></ul>
      </div>
      <ul className="footer__link2"></ul>
      <div className="footer__referral__social">
        <a href="#">
          Invite Friends, Get $5 <AiOutlineArrowRight />
        </a>
        <ul>
          <li>
            <a href="#" className="twitter">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="#" className="facebook">
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a href="#" className="instagram">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="youtube">
              <BsYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright__country">
          <SiAircanada />
          Canada <RxTriangleDown />
        </div>
        <p>
          <AiOutlineCopyrightCircle />
          2023 SkipTheDishes
        </p>
      </div>
    </footer>
  );
}
