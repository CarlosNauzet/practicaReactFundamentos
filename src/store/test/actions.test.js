import {
  advertsLoadedSuccess,
  authLogin,
  authLoginRequest,
  authLoginSuccess,
} from "../actions";
import { types } from "../types";

describe("authLoginSuccess", () => {
  test("Should return and AUTH_LOGIN_SUCCESS action", () => {
    const action = {
      type: types.AUTH_LOGIN_SUCCESS,
    };
    const loginAction = authLoginSuccess();
    expect(loginAction).toEqual(action);
  });
});

describe("advertsLoadedSuccess", () => {
  test("Should return and ADVERT_LOADED_SUCCESS", () => {
    const adverts = "adverts";
    const action = {
      type: types.ADVERTS_LOADED_SUCCESS,
      payload: adverts,
    };
    const loadAction = advertsLoadedSuccess(adverts);
    expect(loadAction).toEqual(action);
  });
});

describe("authLogin", () => {
  const credentials = "credentials";
  const action = authLogin(credentials);
  const dispatch = jest.fn();
  const api = { auth: {} };
  const router = { navigate: jest.fn() };
  test("Logn flow", async () => {
    api.auth.authAPI = jest.fn().mockResolvedValue();
    await action(dispatch, undefined, { api, router });
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
