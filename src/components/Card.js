import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Link to="/models">
      <div class="card">
        <div class="card-content">
          <p class="card-title">SEE THE MODELS</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
