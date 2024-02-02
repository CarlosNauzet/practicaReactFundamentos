import { types } from "./types";

const initialState = {
  auth: false,
  ui: {
    isFetching: false,
    error: null,
  },
  adverts: {
    advertsData: [],
    areLoaded: false,
  },
};

export function adverts(state = initialState.adverts, action) {
  switch (action.type) {
    case types.ADVERTS_LOADED_SUCCESS:
      return {
        advertsData: action.payload,
        areLoaded: true,
      };
    case types.ADVERTS_CREATED_SUCCESS:
      return {
        areLoaded: false,
        advertsData: [action.payload, ...state.advertsData],
      };
    case types.ADVERTS_DETAIL_SUCCESS:
      return {
        areLoaded: false,
        advertsData: [action.payload],
      };
    default:
      return state;
  }
}

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
