import React from "react";
import ReactDOM from "react-dom";

import Navbar from 'navbar/Navbar'

import "./index.css";

const App = () => (
  <div className="container">
    <Navbar />
    <h1>Host App</h1>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
