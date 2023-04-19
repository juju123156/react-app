//App.js
import React, { Component } from "react";

import SelectBox from "./UI/SelectBox";
import Router from "./router/Router";
import Modal from "./UI/Popup";
import "./style/App.css";


const App = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
