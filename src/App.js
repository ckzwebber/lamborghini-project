import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Models from "./components/Models";
import Copy from "./components/Copy";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <Router>
      {isVisible && (
        <div className="App">
          <Nav />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/models" element={<Models />} />
            </Routes>
          </div>
          <Copy />
        </div>
      )}
    </Router>
  );
}

export default App;
