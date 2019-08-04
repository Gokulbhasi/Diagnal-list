import {
  HOME_PAGE_LOADING_LIST,
  HOME_PAGE_LIST_DID_LOAD,
  HOME_PAGE_LIST_DID_FAIL_TO_LOAD,
  SEARCH_LOADING_LIST,
  SEARCH_LIST_DID_LOAD,
  SEARCH_LIST_DID_FAIL_TO_LOAD
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  pageIndex: 1,
  // list: [],
  display: { data: [] },
  fulldata: { data: [] },
  searchTerm: "",
  searchInRedux: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADING_LIST:
      return { ...state, loading: true };
    case HOME_PAGE_LIST_DID_FAIL_TO_LOAD:
      return { ...state, loading: false };
    case HOME_PAGE_LIST_DID_LOAD:
      const data = {
        ...state.display,
        ...action.payload,
        data: state.display.data.concat(action.payload.data)
      };
      return {
        ...state,
        list: action.payload,
        display: data,
        fulldata: data,
        loading: false
      };
    case SEARCH_LOADING_LIST:
      return { ...state, loading: true };
    case SEARCH_LIST_DID_FAIL_TO_LOAD:
      return { ...state, loading: false };
    case SEARCH_LIST_DID_LOAD:
      console.log(action);
      return {
        ...state,
        searchInRedux: action.payload,
        display: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
