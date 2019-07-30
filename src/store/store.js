import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import redcuers from "./reducers/reducers";

const store = createStore(redcuers, {}, applyMiddleware(reduxThunk));

export default store;
