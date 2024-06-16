import React from "react";
import { useState } from "react";
import "./Home.css";
import Card from "./Card";

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home">
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Disclaimer</h2>
            <p>
              This website is just a study project, it is not official from
              Lamborghini and is not for commercial use. All images, brands and
              names are property of Lamborghini. You can visit the official
              website by clicking{" "}
              <a href="https://www.lamborghini.com/en-en" target="_blank">
                here
              </a>
              . This was created by{" "}
              <a href="https://webberportfolio.netlify.app/" target="_blank">
                Carlos Miguel
              </a>
              . Thanks!
            </p>
            <button onClick={handleCloseModal}>OK</button>
          </div>
        </div>
      )}
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
