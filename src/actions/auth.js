import { setAlert } from "./alert";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CHANGE_OPTION,
} from "../actions/types";
import { loginData } from "../data";

//Login user
export const login = (name, password) => dispatch => {
  const res = loginData(name, password);
  if (res) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { isAuthenticated: res, user: { name, password } },
    });
  } else {
    dispatch(setAlert("Dados inválidos", "danger"));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
};

export const changeOption = () => dispatch => {
  dispatch({
    type: CHANGE_OPTION,
  });
};
