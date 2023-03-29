import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <nav className="header">
      <ul className="navbar">
        <li>
          <Link to="/item">Register</Link>
        </li>
        <li>
          <Link className="hover" to="">
            Presentation
          </Link>
        </li>
        <li className="item">
          <Link className="hover2" to="">
            Sirius
          </Link>
        </li>
        <li>
          <Link className="hover" to="">
            Forum
          </Link>
        </li>
        <li>
          <Link className="hover" to="">
            Discord
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
