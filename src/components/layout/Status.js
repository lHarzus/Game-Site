import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStatus } from "../../actions/status";

const Status = ({
  getStatus,
  status: { accounts, characters, online, online24 },
}) => {
  useEffect(() => {
    getStatus();
  }, []);
  return (
    <Fragment>
      <div className="grid-title">Accounts : {accounts}</div>
      <div className="grid-title">Characters : {characters}</div>
      <div className="grid-title">Online : {online}</div>
      <div className="grid-title">Online 24h : {online24}</div>
    </Fragment>
  );
};

Status.propTypes = {
  getStatus: PropTypes.func.isRequired,
  status: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  status: state.status,
});

export default connect(mapStateToProps, { getStatus })(Status);
