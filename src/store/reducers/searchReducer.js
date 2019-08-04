import {
  SEARCH_LOADING_LIST,
  SEARCH_LIST_DID_LOAD,
  SEARCH_LIST_DID_FAIL_TO_LOAD
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  pageIndex: 1,
  searchTerm: "",
  searchInRedux: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_LOADING_LIST:
      return { ...state, loading: true };
    case SEARCH_LIST_DID_FAIL_TO_LOAD:
      return { ...state, loading: false };
    case SEARCH_LIST_DID_LOAD:
      return { ...state, searchInRedux: action.payload, loading: false };
    default:
      return state;
  }
};
