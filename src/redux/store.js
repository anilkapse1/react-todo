import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import editreducer from "./editreducer";

import middleware from "./middleware";
import todoreducer from "./todoreducers";



const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        todoreducer: todoreducer,
        editreducer: editreducer
      }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

store.subscribe(() => {
  console.log("store", store.getState());
});

sagaMiddleware.run(middleware);

