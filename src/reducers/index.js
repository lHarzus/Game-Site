import { combineReducers } from "redux";
import alert from "./alert";
import status from "./status";

export default combineReducers({
  alert,
  status,
});
