import React, { Component } from "react";
import picture from "./images/Untitled-1.jpg";
import Pokegame from "./Pokegame";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="App-logo" src={picture} />
        <Pokegame />
      </div>
    );
  }
}

export default App;
