import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="nav-li" to="/">
            <img
              alt="Logo"
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/logos/2024/03_26/logo_header_01.svg"
              id="nav-logo"
            />
          </Link>
        </li>
        <li>
          <Link className="nav-li" to="/models">
            MODELS
          </Link>
        </li>
        <li>
          <Link className="nav-li" to="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link className="nav-li" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
