import React from "react";
import "./App.css";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import ImgSlider from "./component/Slider/ImgSlider";
import Viewers from "./component/Viewers/Viewers";
import Movies from "./component/Movies/Movies";
import Details from "./Pages/Details";
function App() {
  return (
    <div className='App' >

            
            
            <Router>
              <NavBar/> 
              <Switch>
                <Route path='/detail'>
                  <Details/>
                </Route>
                <Route path='/'>
                  <ImgSlider/>
                  <Viewers/>
                  <Movies/>
                </Route>
              </Switch>            
            </Router>
            
            
        </div>
  );
}

export default App;
