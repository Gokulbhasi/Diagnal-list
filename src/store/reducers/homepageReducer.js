import {
  HOME_PAGE_LOADING_LIST,
  HOME_PAGE_LIST_DID_LOAD,
  HOME_PAGE_LIST_DID_FAIL_TO_LOAD
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  pageIndex: 1,
  list: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADING_LIST:
      return { ...state, loading: true };
    case HOME_PAGE_LIST_DID_FAIL_TO_LOAD:
      return { ...state, loading: false };
    case HOME_PAGE_LIST_DID_LOAD:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
