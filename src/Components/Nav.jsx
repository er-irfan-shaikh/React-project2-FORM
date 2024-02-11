import React from "react";
import './Nav.css'
import logo from "../assets/logo.svg"

function Nav() {
  return (
    <nav className="nav">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
