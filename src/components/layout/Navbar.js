import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li className="img">
            <Link to="/item">Register</Link>
          </li>
          <li className="img">
            <Link to="">Presentation</Link>
          </li>
          <li className="img">
            <Link to="">
              <h1 className="logo">Sirius</h1>
            </Link>
          </li>
          <li className="img">
            <Link to="">Forum</Link>
          </li>
          <li className="img">
            <Link to="">Discord</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

NavBar.propTypes = {};

export default NavBar;
