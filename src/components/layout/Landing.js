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
import UserPanelBtn from "./UserPanelBtn";
import UserPanel from "./UserPanel";
import Images from "./Images";

const Landing = ({ setAlert, auth: { isAuthenticated, user } }) => {
  return (
    <section>
      <div className="inner">
        <div className="container">
          {isAuthenticated ? <UserPanelBtn /> : <Login />}
          <Images />
          <ButtonsGrid />
        </div>

        <div className="grid-2x4">
          <div className="a grid-4x1">
            <Status />
          </div>
          <div className="b">
            {isAuthenticated ? <UserPanel /> : <Register />}
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
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setAlert })(Landing);
