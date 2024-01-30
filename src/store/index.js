import { applyMiddleware, combineReducers, createStore } from "redux";
import { types } from "./types";
import { composeWithDevTools } from "@redux-devtools/extension";
import * as actions from "./actions";
import * as reducers from "./reducers";
import { withExtraArgument } from "redux-thunk";
import * as authAPI from "../pages/auth/service";

const composeEnhancers = composeWithDevTools({ actions });
const { auth, ui } = reducers;
const rootReducers = combineReducers({ auth, ui });

export const configureStore = (initialState = { auth: false }, { router }) => {
  const middleware = withExtraArgument({ api: { authAPI }, router });
  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(middleware))
  );
  return store;
};
