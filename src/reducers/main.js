import ActionTypes from 'actionTypes';
import get from 'lodash/get';

export const initialState = {
  movieTitles: [],
  watchList: [],
  viewedList: [],
  favoriteList: [],
  blackList: [],
  sideMenuIsOpen: true,
  alert: null,
  isError: null,
  isLoading: false,
  totalResults: '',
  currentPage: 1,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.GET_FIRST_DATA: {
      const watchList = get(payload, 'watchList');
      const viewedList = get(payload, 'viewedList');
      const favoriteList = get(payload, 'favoriteList');
      const blackList = get(payload, 'blackList');
      return {
        ...state,
        watchList: watchList,
        viewedList: viewedList,
        favoriteList: favoriteList,
        blackList: blackList,
      };
    }

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

    case ActionTypes.CURRENT_PAGE_INCREMENT: {
      let currentPage = get(payload, 'currentPage');
      currentPage += 1;
      return { ...state, currentPage };
    }
    case ActionTypes.CURRENT_PAGE_DECREMENT: {
      let currentPage = get(payload, 'currentPage');
      currentPage -= 1;
      return { ...state, currentPage };
    }
    case ActionTypes.CURRENT_PAGE_RESET: {
      return { ...state, currentPage: 1 };
    }

    case ActionTypes.GET_ALL_TITLES_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ActionTypes.GET_ALL_TITLES_FAILURE: {
      return { ...state, isLoading: false };
    }
    case ActionTypes.GET_ALL_TITLES_SUCCESS: {
      const movieTitles = get(payload, 'Search');
      const totalResults = get(payload, 'totalResults');
      if (movieTitles) {
        movieTitles.forEach((el) => (el.key = el.imdbID));
        return { ...state, movieTitles, totalResults, isLoading: false };
      }
      return { ...state, isLoading: false };
    }

    case ActionTypes.UPGRADE_WATCH_LIST: {
      return { ...state, watchList: payload };
    }
    case ActionTypes.UPGRADE_VIEWED_LIST: {
      return { ...state, viewedList: payload };
    }
    case ActionTypes.UPGRADE_FAVORITE_LIST: {
      return { ...state, favoriteList: payload };
    }
    case ActionTypes.UPGRADE_BLACK_LIST: {
      return { ...state, blackList: payload };
    }

    default: {
      return state;
    }
  }
}
