import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <nav>
    <ul>
      <li>
        <Link to="/ex1">Example1</Link>
      </li>
      <li>
        <Link to="/ex2">Example2</Link>
      </li>
      <li>
        <Link to="/ex3">Example3</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
