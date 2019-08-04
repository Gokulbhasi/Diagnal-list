import { combineReducers } from "redux";

import homepageReducer from "./homepageReducer";
// import searchReducer from "./searchReducer";

const reducers = combineReducers({
  home: homepageReducer
  // search: searchReducer
});

export default reducers;
