import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav id="nav">
      <ul id="nav-ul">
        <li className="nav-li poppins-bold">
          <Link to="/">
            <img
              alt="Logo"
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/logos/2024/03_26/logo_header_01.svg"
              className="nav-logo"
            />
          </Link>
        </li>
        <li className="poppins-bold">
          <Link className="nav-li nav-li-models" to="/models">
            MODELS
          </Link>
        </li>
        <li className="nav-li poppins-bold">ABOUT</li>
        <li className="nav-li poppins-bold">CONTACT</li>
      </ul>
    </nav>
  );
}
