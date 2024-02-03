import { authLoginSuccess, authLogout } from "../actions";
import { auth, initialState } from "../reducers";

describe("auth", () => {
  test("Should manage to AUTH_LOGIN_SUCCESS", () => {
    const state = initialState.auth;
    const action = authLoginSuccess();
    expect(auth(state, action)).toBeTruthy();
  });

  test("Should manage to AUTH_LOGOUT", () => {
    const state = initialState.auth;
    const action = authLogout();
    expect(auth(state, action)).toBeFalsy();
  });
});
