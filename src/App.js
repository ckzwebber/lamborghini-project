import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import "./components/Models.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Models from "./components/Models";
import About from "./components/About";
import Contact from "./components/Contact";
import Copy from "./components/Copy";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <div className="main">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/models" element={<Models />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Copy />
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
