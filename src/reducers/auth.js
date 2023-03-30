import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CHANGE_OPTION,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null,
  option: 1, //1-vote, 2-support
};

export default function AUTH(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
        user: payload.user,
        option: 1,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        option: 1,
      };
    case CHANGE_OPTION:
      const opt = state.option;
      if (opt === 1) opt = 2;
      else opt === 1;
      return {
        ...state,
        option: payload.option,
      };
    default:
      return state;
  }
}
