import {
  HOME_PAGE_LOADING_LIST,
  HOME_PAGE_LIST_DID_LOAD,
  HOME_PAGE_LIST_DID_FAIL_TO_LOAD
} from "./types";

import homepageListApi from "../../networking/apis/homepageListApi";

export const loadList = pageindex => {
  return async (dispatch, getState) => {
    const state = getState();
    if (state.home.loading) return;

    dispatch(loadingDidStart());

    const response = await homepageListApi(pageindex);

    if (response.error) return dispatch(listDidFailToLoad());

    return dispatch(listDidLoad(response));
  };
};

const listDidFailToLoad = () => ({
  type: HOME_PAGE_LIST_DID_FAIL_TO_LOAD
});
const listDidLoad = list => ({
  type: HOME_PAGE_LIST_DID_LOAD,
  payload: list
});
const loadingDidStart = () => ({ type: HOME_PAGE_LOADING_LIST });
