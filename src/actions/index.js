import { createAction } from 'redux-actions';
import { getEndpoint } from 'helpers/requests';
import { createAction as createAPIActions } from 'redux-api-middleware';
import ActionTypes from 'actionTypes';

export const getAllTitlesRequest = (title, type = '') =>
  createAPIActions({
    endpoint: getEndpoint(`&s=${title}&type=${type}`),
    method: 'GET',
    types: [
      ActionTypes.GET_ALL_TITLES_REQUEST,
      ActionTypes.GET_ALL_TITLES_SUCCESS,
      ActionTypes.GET_ALL_TITLES_FAILURE,
    ],
  });

export const showAlert = createAction(ActionTypes.SHOW_ALERT);
export const hideAlert = createAction(ActionTypes.HIDE_ALERT);

export const getAllTitles = createAction(ActionTypes.GET_ALL_TITLES);
export const toggleSideMenu = createAction(ActionTypes.TOGGLE_SIDE_MENU);
