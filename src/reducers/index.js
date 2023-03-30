import { combineReducers } from "redux";
import alert from "./alert";
import status from "./status";
import auth from "./auth";

export default combineReducers({
  alert,
  status,
  auth,
});
