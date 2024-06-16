import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div class="card">
      <Link to="/models">
        <div class="card-content">
          <p class="card-title">SEE THE MODELS</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
