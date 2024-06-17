import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Link to="/models">
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">SEE THE MODELS</span>
      </button>
    </Link>
  );
}
