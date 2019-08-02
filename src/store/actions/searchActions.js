import {
  SEARCH_LOADING_LIST,
  SEARCH_LIST_DID_LOAD,
  SEARCH_LIST_DID_FAIL_TO_LOAD
} from "./types";

import searchListApi from "../../networking/apis/searchListApi";

export const searchInRedux = (searchTerm, values) => {
  return async (dispatch, getState) => {
    const state = getState();
    if (state.home.loading) return;
    console.log(searchTerm);

    dispatch(loadingDidStart());
    console.log(searchTerm);
    const response = await searchListApi(searchTerm);
    console.log(searchTerm);
    if (response.error) return dispatch(listDidFailToLoad());

    return dispatch(listDidLoad(response));
  };
};

const listDidFailToLoad = () => ({
  type: SEARCH_LIST_DID_FAIL_TO_LOAD
});
const listDidLoad = list => ({
  type: SEARCH_LIST_DID_LOAD,
  payload: list
});
const loadingDidStart = () => ({ type: SEARCH_LOADING_LIST });
