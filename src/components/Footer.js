import React from "react";
import whatsapp from "../assets/whatsapp.svg";
import linkedin from "../assets/linkedin.svg";
import skype from "../assets/skype.svg";
import telegram from "../assets/telegram.svg";
import "./Footer.css";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <img className="footer-logo" src={logo} alt="" />
        <div className="footer-info">
          <h1>Join our newsletter</h1>
          <div>
            <div>Subscribe to our newsletter for the latest updates,</div>
            <div>trends, and insights delivered straight to your inbox. </div>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className="copyright-container">
        <div>
          <div>
            ©2020 All Rights Reserved. Koffeekodes® is a registered trademark.
          </div>
          <div>Privacy | Terms | Legal | Cookie Preferences</div>
        </div>
        <div className="icon-container">
          <img className="icon wa-icon" src={whatsapp} alt="" />
          <img className="icon" src={linkedin} alt="" />
          <img className="icon" src={skype} alt="" />
          <img className="icon" src={telegram} alt="" />
        </div>
      </div>
    </div>
  );
}
