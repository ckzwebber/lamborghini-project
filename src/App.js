import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/Models.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Models from "./components/Models";
import About from "./components/About";
import Copy from "./components/Copy";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Copy />
      </div>
    </Router>
  );
}

export default App;
