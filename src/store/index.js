import { combineReducers, createStore } from "redux";
import { types } from "./types";
import { composeWithDevTools } from "@redux-devtools/extension";
import * as actions from "./actions";
import * as reducers from "./reducers";

const composeEnhancers = composeWithDevTools({ actions });
const { auth } = reducers;
const rootReducers = combineReducers({ auth });

export const configureStore = (initialState = { auth: false }) => {
  const store = createStore(rootReducers, initialState, composeEnhancers());
  return store;
};
