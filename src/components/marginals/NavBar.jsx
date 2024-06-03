import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/playground">Playground</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
