import React, { Component } from "react";
import Home from "./Components/Home";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Form Testing Site",
          catagory: "Web Design Fundamentals",
          difficulty: "Easy"
        },
        {
          title: "My Rating's Site",
          catagory: "Skills Project",
          difficulty: "Medium"
        },
        {
          title: "Drum Machine Site",
          catagory: "Portfolio Project",
          difficulty: "Hard"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <h1> Test React Project </h1>
        <Home projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
