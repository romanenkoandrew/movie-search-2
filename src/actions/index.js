import { createAction } from 'redux-actions';
import { getEndpoint } from 'helpers/requests';
import { createAction as createAPIActions } from 'redux-api-middleware';
import ActionTypes from 'actionTypes';

export const getAllTitlesRequest = (title, type = '', page = 1) =>
  createAPIActions({
    endpoint: getEndpoint(`&s=${title}&type=${type}&page=${page}`),
    method: 'GET',
    types: [
      ActionTypes.GET_ALL_TITLES_REQUEST,
      ActionTypes.GET_ALL_TITLES_SUCCESS,
      ActionTypes.GET_ALL_TITLES_FAILURE,
    ],
  });

export const getTitleByIDRequest = (id) =>
  createAPIActions({
    endpoint: getEndpoint(`&i=${id}`),
    method: 'GET',
    types: [
      ActionTypes.GET_TITLE_BY_ID_REQUEST,
      ActionTypes.GET_TITLE_BY_ID_SUCCESS,
      ActionTypes.GET_TITLE_BY_ID_FAILURE,
    ],
  });

export const showAlert = createAction(ActionTypes.SHOW_ALERT);
export const hideAlert = createAction(ActionTypes.HIDE_ALERT);

export const toggleModal = createAction(ActionTypes.TOGGLE_MODAL);
export const toggleSideMenu = createAction(ActionTypes.TOGGLE_SIDE_MENU);

export const currentPageIncrement = createAction(
  ActionTypes.CURRENT_PAGE_INCREMENT
);
export const currentPageDecrement = createAction(
  ActionTypes.CURRENT_PAGE_DECREMENT
);
export const currentPageReset = createAction(ActionTypes.CURRENT_PAGE_RESET);

export const getAllTitles = createAction(ActionTypes.GET_ALL_TITLES);
export const getTitleByID = createAction(ActionTypes.GET_TITLE_BY_ID);

export const upgradeWatchList = createAction(ActionTypes.UPGRADE_WATCH_LIST);
export const upgradeViewedList = createAction(ActionTypes.UPGRADE_VIEWED_LIST);
export const upgradeFavoriteList = createAction(
  ActionTypes.UPGRADE_FAVORITE_LIST
);
export const upgradeBlackList = createAction(ActionTypes.UPGRADE_BLACK_LIST);
export const deleteFromAllLists = createAction(
  ActionTypes.DELETE_FROM_ALL_LISTS
);

export const getFirstData = createAction(ActionTypes.GET_FIRST_DATA);
