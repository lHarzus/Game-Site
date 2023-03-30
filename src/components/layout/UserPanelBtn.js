import React from "react";
import PropTypes from "prop-types";
import { logout, changeOption } from "../../actions/auth";
import { connect } from "react-redux";
import btn from "../../images/discord.png";

const UserPanelBtn = ({ logout, changeOption }) => {
  const logoutBtn = () => {
    logout();
  };
  const changeOpt = () => {
    changeOpt();
  };
  return (
    <div className="grid-4x1">
      <div>
        <button className=" btn-download btn2 ">UserPanel</button>
      </div>
      <div>
        <button className="btn-download btn2">ItemShop</button>
      </div>
      <div>
        <button className="btn-download btn2">Support</button>
      </div>
      <div>
        <button className="btn-download btn2" onClick={() => logoutBtn()}>
          Logout
        </button>
      </div>
    </div>
  );
};

UserPanelBtn.propTypes = {
  logout: PropTypes.func.isRequired,
  changeOption: PropTypes.func.isRequired,
};

export default connect(null, { logout, changeOption })(UserPanelBtn);
