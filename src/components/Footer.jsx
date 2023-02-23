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
        <ul className="footer__link1__left">
          <li>About Us</li>
          <li>FAQ</li>
          <li>Gift Cards</li>
          <li>Rewards</li>
          <li>Skip Express Lane</li>
          <li>Browse by City</li>
        </ul>
        <ul className="footer__link1__right">
          <li>Partners</li>
          <li>Become A Courier</li>
          <li>Careers</li>
          <li>Media & Community</li>
          <li>Partner Success Guide</li>
          <li>Food Wiki</li>
        </ul>
      </div>
      <ul className="footer__link2">
        <li>Terms Of Service</li>
        <li>Privacy Policy</li>
        <li>Skip Social Code</li>
        <li>Accessibility Policy</li>
        <li>Account Security</li>
        <li>Coronavirus Updates</li>
        <li>Rewards Conditions</li>
      </ul>
      <div className="footer__referral__social">
        <a href="#" className="invite">
          Invite Friends, Get $5 <AiOutlineArrowRight />
        </a>
        <ul className="ul__sns">
          <li>
            <a href="#" className="twitter">
              <BsTwitter size={28} />
            </a>
          </li>
          <li>
            <a href="#" className="facebook">
              <AiFillFacebook size={35} />
            </a>
          </li>
          <li>
            <a href="#" className="instagram">
              <BsInstagram size={28} />
            </a>
          </li>
          <li>
            <a href="#" className="youtube">
              <BsYoutube size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright__country">
          <SiAircanada size={18} />
          <span className="footer__copyright__canada">Canada</span>
          <RxTriangleDown />
        </div>
        <p className="footer__copyright__conpany">
          <AiOutlineCopyrightCircle size={10}/>
          <span className="footer__copyright__skip">
          2023 SkipTheDishes
          </span>
        </p>
      </div>
    </footer>
  );
}
