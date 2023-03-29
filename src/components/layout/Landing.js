import React from "react";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";

const Landing = ({ setAlert }) => {
  const onClick = () => {
    setAlert("nice click", "success");
  };
  return (
    <section className="landing">
      <div className="landing-inner">
        <h1>oi</h1>
        <p>herattrthwertshwterhwehrtethrw</p>
        <button onClick={onClick}> Click me </button>
      </div>
    </section>
  );
};

Landing.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Landing);
