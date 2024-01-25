import { types } from "./types";

export const authLoginSuccess = () => {
  return { type: types.AUTH_LOGIN_SUCCESS };
};

export const authLogout = () => {
  return { type: types.AUTH_LOGOUT };
};
