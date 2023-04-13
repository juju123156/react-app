import React from "react";

import { NavLink } from "react-router-dom";
import "../style/Nav.css";

function Nav({ children }) {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/mypage">Mypage</NavLink>
      </div>
      {children}
    </nav>
  );
}

export default Nav;
