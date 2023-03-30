import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Register = props => {
  return (
    <Fragment>
      <div className="register-title">
        <h1>Register Now</h1>
      </div>
      <div className="register-body">
        <form className="register-form">
          <div>
            <label htmlFor="name">Account Name</label>
          </div>
          <div>
            <input id="name" type="text"></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input id="password" type="password"></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input id="email" type="email"></input>
          </div>
          <div>
            <input id="newsletter" type="checkbox"></input>
            <label htmlFor="newsletter">Newsletter</label>
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
          <div>
            <p>By registering you agree to our Terms Of Service</p>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

Register.propTypes = {};

export default Register;
