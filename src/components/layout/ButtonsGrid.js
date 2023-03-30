import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import download from "../../images/download.png";
import discord from "../../images/discord.png";
import ranking from "../../images/ranking.png";

const ButtonsGrid = props => {
  return (
    <div className="grid-1x3">
      <div>
        <button className="btn-download btn2">Download</button>
      </div>
      <div>
        <button className="btn-discord btn2">Discord</button>
      </div>
      <div>
        <button className="btn-ranking btn2">Ranking</button>
      </div>
    </div>
  );
};

ButtonsGrid.propTypes = {};

export default ButtonsGrid;
