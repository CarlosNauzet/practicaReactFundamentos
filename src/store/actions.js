import { toast } from "react-toastify";
import { types } from "./types";

export const authLoginSuccess = () => {
  return { type: types.AUTH_LOGIN_SUCCESS };
};

export const authLoginRequest = () => {
  return { type: types.AUTH_LOGIN_REQUEST };
};

export const authLoginFailure = (error) => {
  return { type: types.AUTH_LOGIN_FAILURE, error: true, payload: error };
};

export const authLogout = () => {
  return { type: types.AUTH_LOGOUT };
};

export const authLogin =
  ({ email, password }, rememberMe) =>
  async (dispatch, getState, { api: { authAPI }, router }) => {
    try {
      dispatch(authLoginRequest());
      await authAPI.logIn(email, password, rememberMe);
      toast.success("User logged in!");
      dispatch(authLoginSuccess());
      router.navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("There was an issue while loggin in. Please try again");
      dispatch(authLoginFailure(error));
    }
  };

export const advertsLoadedSuccess = () => {};
