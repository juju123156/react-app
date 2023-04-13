//Router.js
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Mypage from "../pages/Mypage";
import Nav from "../UI/Nav";
import "../style/App.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
