import ActionTypes from 'actionTypes';
import get from 'lodash/get';

export const initialState = {
  sideMenuIsOpen: false,
  movieTitles: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.TOGGLE_SIDE_MENU: {
      const sideMenuIsOpen = get(payload, 'sideMenuIsOpen');
      return { ...state, sideMenuIsOpen };
    }
    case ActionTypes.GET_ALL_TITLES_SUCCESS: {
      const movieTitles = get(payload, 'Search');
      movieTitles.forEach((el) => (el.key = el.imdbID));
      return { ...state, movieTitles };
    }

    default: {
      return state;
    }
  }
}
