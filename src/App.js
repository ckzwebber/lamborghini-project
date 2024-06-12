import "./App.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="main">
        <Slider />
      </div>
    </div>
  );
}

export default App;
