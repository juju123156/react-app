import React from "react";

import { Link } from "react-router-dom";
import "../style/Nav.css";

function Nav({ children }) {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/mypage">Mypage</Link>
      </div>
      {children}
    </nav>
  );
}

export default Nav;
