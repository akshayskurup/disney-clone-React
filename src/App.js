import React from "react";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import ImgSlider from "./component/Slider/ImgSlider";
function App() {
  return (
    <div className="Home">
            <NavBar/>
            <ImgSlider/>
        </div>
  );
}

export default App;
