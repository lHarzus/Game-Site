import React from "react";
import PropTypes from "prop-types";

const ButtonsGrid = props => {
  return (
    <div className="grid-1x3">
      <div>
        <button className="btn2">Download</button>
      </div>
      <div>
        <button className="btn2">Discord</button>
      </div>
      <div>
        <button className="btn2">Ranking</button>
      </div>
    </div>
  );
};

ButtonsGrid.propTypes = {};

export default ButtonsGrid;
