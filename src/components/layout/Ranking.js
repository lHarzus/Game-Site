import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTop5 } from "../../actions/status";

const Ranking = ({ getTop5, status: { top5 } }) => {
  useEffect(() => {
    getTop5();
  }, []);
  console.log("wofewef", top5);
  return top5.length === 0 ? (
    <Fragment>Loading</Fragment>
  ) : (
    <Fragment>
      <div className="a">Top players</div>
      <div className="r1">Lvl {top5[0].lvl}</div>
      <div className="p1"> {top5[0].name}</div>
      <div className="r2">Lvl {top5[1].lvl}</div>
      <div className="p2"> {top5[1].name}</div>
      <div className="r3">Lvl {top5[2].lvl}</div>
      <div className="p3"> {top5[2].name}</div>
      <div className="r4">Lvl {top5[3].lvl}</div>
      <div className="p4"> {top5[3].name}</div>
      <div className="r5">Lvl {top5[4].lvl}</div>
      <div className="p5"> {top5[4].name}</div>
    </Fragment>
  );
};

Ranking.propTypes = {
  getTop5: PropTypes.func.isRequired,
  status: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  status: state.status,
});

export default connect(mapStateToProps, { getTop5 })(Ranking);
