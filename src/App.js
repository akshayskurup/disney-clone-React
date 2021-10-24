import React from "react";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import ImgSlider from "./component/Slider/ImgSlider";
import Viewers from "./component/Viewers/Viewers";
import Movies from "./component/Movies/Movies";
function App() {
  return (
    <div className="Home">
            <NavBar/>
            <ImgSlider/>
            <Viewers/>
            <Movies/>

        </div>
  );
}

export default App;
