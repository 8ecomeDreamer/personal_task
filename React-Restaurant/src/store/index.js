// import { legacy_createStore as createStore  } from 'redux'
// import reducer from './reducer'

// // 判断是否支持redux_devtools
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export default store

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

// console.log(rootReducer);

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
