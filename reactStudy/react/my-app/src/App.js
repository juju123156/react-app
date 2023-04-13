//App.js

import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Component from "./component/Component";
import Button from "./UI/Button";
import Welcomes from "./test";
import GetGridData from "./api/GetGridData";

import Test2 from "./test2";

function App() {

  return (
    <div className="App">
    <Component/>
    </div>
  );
}

export default App;
