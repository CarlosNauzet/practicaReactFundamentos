import { types } from "./types";

const initialState = {
  auth: false,
  ui: {
    isFetching: false,
    error: null,
  },
};

export function auth(state = initialState.auth, action) {
  switch (action.type) {
    case types.AUTH_LOGIN_SUCCESS:
      return true;
    case types.AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function ui(state = initialState.ui, action) {
  if (action.error) {
    return { isFetching: false, error: action.payload };
  }
  if (action.type.endsWith("/request")) {
    return { isFetching: true, error: null };
  }
  if (action.type.endsWith("/success")) {
    return { isFetching: false, error: null };
  }
  return state;
}
