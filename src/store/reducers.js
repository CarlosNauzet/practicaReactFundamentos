import { types } from "./types";

const initalState = {
  auth: false,
};

export function auth(state = initalState.auth, action) {
  switch (action.type) {
    case types.AUTH_LOGIN_SUCCESS:
      return true;
    case types.AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}
