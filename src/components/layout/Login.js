import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth";
import { connect } from "react-redux";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(username, password);
  };
  return (
    <div className="input">
      <p className="login-title">Login now!</p>
      <form className="form-login" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            value={username}
            name="username"
            type="text"
            placeholder="username"
            onChange={e => onChange(e)}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <input
            value={password}
            name="password"
            type="password"
            placeholder="password"
            onChange={e => onChange(e)}
            className="input"
            required
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
