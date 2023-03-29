import { GET_STATUS, STATUS_ERROR, GET_TOP5 } from "../actions/types";

const initialState = {
  accounts: 0,
  characters: 0,
  online: 0,
  online24: 0,
  error: {},
  top5: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_STATUS:
      return { ...state, ...payload };
    case GET_TOP5:
      return { ...state, top5: payload };
    case STATUS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
