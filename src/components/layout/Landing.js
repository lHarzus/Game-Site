import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";
import Login from "./Login";
import ButtonsGrid from "./ButtonsGrid";
import Register from "./Register";
import Status from "./Status";
import Ranking from "./Ranking";

const Landing = ({ setAlert }) => {
  return (
    <section>
      <div className="inner">
        <div className="container">
          <Login />
          <div className="box-one">
            <img
              src="https://www.quizexpo.com/wp-content/uploads/2022/03/cover-6-850x491.jpg"
              alt="image"></img>
          </div>
          <div>
            <ButtonsGrid />
          </div>
        </div>

        <div className="grid-2x1">
          <div className="a grid-4x1">
            <Status />
          </div>
          <div className="b">
            <Register />
          </div>
          <div className="c grid-ranking">
            <Ranking />
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Landing);
