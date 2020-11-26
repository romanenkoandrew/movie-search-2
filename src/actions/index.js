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

export const getAllTitles = createAction(ActionTypes.GET_ALL_TITLES);
export const toggleSideMenu = createAction(ActionTypes.TOGGLE_SIDE_MENU);
