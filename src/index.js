import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialReducer, initializeState } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";

import App from "./routes/App";
import * as serviceWorker from "./serviceWorker";

/* 추가해야 할 리듀서가 생긴다면 combineReducers를 사용한다*/
// const rootReducer = combineReducers({ initialReducer });

const sagaMiddleware = createSagaMiddleware();
/* store 생성 */
const store = createStore(
  initialReducer, // action to handle
  initializeState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
