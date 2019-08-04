import {
  SEARCH_LOADING_LIST,
  SEARCH_LIST_DID_LOAD,
  SEARCH_LIST_DID_FAIL_TO_LOAD
} from "./types";

import searchListApi from "../../networking/apis/searchListApi";

export const searchInRedux = searchTerm => {
  //console.log(searchTerm);
  return async (dispatch, getState) => {
    const state = getState();
    if (state.home.loading) return;

    dispatch(loadingDidStart());
    //console.log(state.home.list.data);
    const check = searchTerm === "" ? true : false;
    if (check) {
      return dispatch(listDidLoad(state.home.fulldata));
    }
    let searchData = [];
    searchData = state.home.fulldata.data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    searchData =
      searchData.length <= 0
        ? await searchListApi(searchTerm)
        : { status: true, data: searchData };
    searchData.pageNo = 1;
    if (searchData.error) return dispatch(listDidFailToLoad());

    return dispatch(listDidLoad(searchData));
  };
};

const listDidFailToLoad = () => ({
  type: SEARCH_LIST_DID_FAIL_TO_LOAD
});
const listDidLoad = searchData => ({
  type: SEARCH_LIST_DID_LOAD,
  payload: searchData
});
const loadingDidStart = () => ({ type: SEARCH_LOADING_LIST });
