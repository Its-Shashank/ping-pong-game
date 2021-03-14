import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import history from "./utils/history";
import ErrorBoundary from "./components/ErrorBoundary";

import App from "./App";
import configureStore from "./configureStore";

const initialState = {};
const { store, persistor } = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById("app");
ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </ErrorBoundary>,
  MOUNT_NODE
);

if (module.hot) {
  module.hot.accept();
}
