import React, { Fragment } from "react";
import PropTypes from "prop-types";

const UserPanel = props => {
  return (
    <Fragment>
      <div className="register-title">
        <h1>UserPanel</h1>
      </div>
      <div className="userpanel register-body">
        <div className="vote grid-2x1">
          <div>
            <button>Vote4Buff</button>
          </div>
          <div>
            <p>
              Vote for us and receive a bonus ingame! EXP 20%, 10% Monster, 20%
              Drop
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

UserPanel.propTypes = {};

export default UserPanel;
