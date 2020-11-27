import ActionTypes from 'actionTypes';
import get from 'lodash/get';

export const initialState = {
  movieTitles: [],
  watchList: [],
  viewed: [],
  favorite: [],
  blackList: [],
  sideMenuIsOpen: false,
  alert: null,
  isError: null,
  isLoading: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.SHOW_ALERT: {
      console.log(payload);
      const alert = get(payload, 'alert');
      const isError = get(payload, 'error');
      return { ...state, alert, isError };
    }
    case ActionTypes.HIDE_ALERT: {
      return { ...state, alert: null, isError: null };
    }

    case ActionTypes.TOGGLE_SIDE_MENU: {
      const sideMenuIsOpen = get(payload, 'sideMenuIsOpen');
      return { ...state, sideMenuIsOpen };
    }

    case ActionTypes.GET_ALL_TITLES_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ActionTypes.GET_ALL_TITLES_FAILURE: {
      return { ...state, isLoading: false };
    }
    case ActionTypes.GET_ALL_TITLES_SUCCESS: {
      const movieTitles = get(payload, 'Search');
      movieTitles.forEach((el) => (el.key = el.imdbID));
      return { ...state, movieTitles, isLoading: false };
    }

    default: {
      return state;
    }
  }
}
