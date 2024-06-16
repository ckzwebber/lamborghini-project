import React from "react";
import "./Home.css";
import image from "../assets/images/home1.jpg";
import Card from "./Card";

export default function Home() {
  return (
    <div className="home">
      <div className="background-image-home"></div>
      <div className="text">
        <h1 className="home-title">Welcome to Lamborghini</h1>
        <p className="home-sub">
          Unleashing the Power of Excellence - Experience the Legacy of
          Lamborghini
        </p>

        <Card />
      </div>
    </div>
  );
}
