//App.js
import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import Nav from "./UI/Nav";
import Router from "./router/Router";
import "./style/App.css";

const App = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
