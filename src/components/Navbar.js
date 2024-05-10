import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div>
        <img className="app-logo" src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <div className="link">
          <a className="home" href="home">
            Home{" "}
          </a>
          <div className="space">|</div>
        </div>
        <div className="link">
          <a href="work">Work </a>
          <div className="space">|</div>
        </div>
        <div className="link">
          <a href="about">About </a>
          <div className="space">|</div>
        </div>
        <div className="link">
          <a href="career">Career </a>
          <div className="space">|</div>
        </div>
        <div className="link">
          <a href="dedicate">Dedicate </a>
        </div>
        <div>
          <button type="button">Contact</button>
        </div>
      </div>

      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div
          className={isMobileMenuOpen ? "line line-1 open" : "line line-1"}
        ></div>
        <div
          className={isMobileMenuOpen ? "line line-2 open" : "line line-2"}
        ></div>
        <div
          className={isMobileMenuOpen ? "line line-3 open" : "line line-3"}
        ></div>
      </div>

      {isMobileMenuOpen && (
        <ul className="mobile-nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
          <li>
            <a href="#dedicate">Dedicate</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
