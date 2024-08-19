import React from "react";
import "../styles/Button.css";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Link to="/models">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">SEE THE MODELS</span>
      </button>
    </Link>
  );
}
