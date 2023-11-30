import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        Home
      </Link>
      <ul>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/users/form">Create Users</NavLink>
        </li>
        <li>
          <NavLink to="/products">Prodcuts</NavLink>
        </li>
      </ul>
    </nav>
  );
};
