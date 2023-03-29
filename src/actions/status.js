import { GET_STATUS, STATUS_ERROR, GET_TOP5 } from "./types";
import { getStatusData } from "../data";
import { getTop5Data } from "../data";

export const getStatus = () => dispatch => {
  try {
    const res = getStatusData();
    dispatch({
      type: GET_STATUS,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: STATUS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getTop5 = () => dispatch => {
  try {
    const res = getTop5Data();
    dispatch({
      type: GET_TOP5,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: STATUS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
