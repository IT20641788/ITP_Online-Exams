import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Exam.MainComponent";
//import Dashboard from "./components/Dashboard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <div>
          <Main />
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
