import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Home />
      </Router>
    </div>
  );
}

export default App;
