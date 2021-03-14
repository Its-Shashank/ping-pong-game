/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./utils/history";
import gameReducer from "./Providers/reducer";

export default function createReducer() {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    gameReducer
  });

  return rootReducer;
}
