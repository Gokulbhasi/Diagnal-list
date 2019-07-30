import { combineReducers } from "redux";

import homepageReducer from "./homepageReducer";

const reducers = combineReducers({
  home: homepageReducer
});

export default reducers;
