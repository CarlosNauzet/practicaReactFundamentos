import { applyMiddleware, combineReducers, createStore } from "redux";
import { types } from "./types";
import { composeWithDevTools } from "@redux-devtools/extension";
import * as actions from "./actions";
import * as reducers from "./reducers";
import { withExtraArgument } from "redux-thunk";
import * as authAPI from "../pages/auth/service";
import * as advertsAPI from "../pages/adverts/service";

const composeEnhancers = composeWithDevTools({ actions });
const { auth, ui, adverts } = reducers;
const rootReducers = combineReducers({ auth, ui, adverts });

export const configureStore = (initialState = { auth: false }, { router }) => {
  const middleware = withExtraArgument({
    api: { authAPI, advertsAPI },
    router,
  });
  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(middleware))
  );
  return store;
};
