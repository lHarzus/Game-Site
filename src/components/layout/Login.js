import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Login = props => {
  return (
    <div className="input">
      <p className="login-title">Login now!</p>
      <form className="form-login">
        <div className="form-group">
          <input
            id="name"
            type="text"
            placeholder="username"
            className="input"
          />
        </div>
        <div className="form-group">
          <input
            id="password"
            type="password"
            placeholder="password"
            className="input"
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <div className="forgot">
        <Link to="#">Forgot password ?</Link>
      </div>
      <div className="forgot">
        <Link to="#">Forgot username ?</Link>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
