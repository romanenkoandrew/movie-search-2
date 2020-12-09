import reducer, { initialState } from './main';
import ActionTypes from 'actionTypes';
import get from 'lodash/get';

describe('modalWindow reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '123', payload: '123' })).toEqual(
      initialState
    );
  });
  it('should handle CURRENT_PAGE_INCREMENT', () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.CURRENT_PAGE_INCREMENT,
        payload: { currentPage: 10 },
      })
    ).toEqual({ ...initialState, currentPage: 11 });
  });
  it('should handle CURRENT_PAGE_DECREMENT', () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.CURRENT_PAGE_DECREMENT,
        payload: { currentPage: 10 },
      })
    ).toEqual({ ...initialState, currentPage: 9 });
  });
  it('should handle CURRENT_PAGE_RESET', () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.CURRENT_PAGE_RESET,
        payload: {},
      })
    ).toEqual({ ...initialState, currentPage: 1 });
  });
  it('should handle TOGGLE_SIDE_MENU', () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.TOGGLE_SIDE_MENU,
        payload: { sideMenuIsOpen: true },
      })
    ).toEqual({ ...initialState, sideMenuIsOpen: true });
  });
  it('should handle HIDE_ALERT', () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.HIDE_ALERT,
        payload: {},
      })
    ).toEqual({ ...initialState, alert: null, isError: null });
  });
  it('should handle SHOW_ALERT', () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.SHOW_ALERT,
        payload: { error: true, alert: 'test' },
      })
    ).toEqual({ ...initialState, isError: true, alert: 'test' });
  });
  it('should handle GET_FIRST_DATA', () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.GET_FIRST_DATA,
        payload: {
          watchList: ['1'],
          viewedList: ['2'],
          favoriteList: ['3'],
          blackList: ['4'],
        },
      })
    ).toEqual({
      ...initialState,
      watchList: ['1'],
      viewedList: ['2'],
      favoriteList: ['3'],
      blackList: ['4'],
    });
  });
  it('should handle UPGRADE_WATCH_LIST', () => {
    const payload = ['1'];
    expect(
      reducer(initialState, {
        type: ActionTypes.UPGRADE_WATCH_LIST,
        payload: payload,
      })
    ).toEqual({ ...initialState, watchList: payload });
  });
  it('should handle UPGRADE_VIEWED_LIST', () => {
    const payload = ['2'];
    expect(
      reducer(initialState, {
        type: ActionTypes.UPGRADE_VIEWED_LIST,
        payload: payload,
      })
    ).toEqual({ ...initialState, viewedList: payload });
  });
  it('should handle UPGRADE_FAVORITE_LIST', () => {
    const payload = ['3'];
    expect(
      reducer(initialState, {
        type: ActionTypes.UPGRADE_FAVORITE_LIST,
        payload: payload,
      })
    ).toEqual({ ...initialState, favoriteList: payload });
  });
  it('should handle UPGRADE_BLACK_LIST', () => {
    const payload = ['4'];
    expect(
      reducer(initialState, {
        type: ActionTypes.UPGRADE_BLACK_LIST,
        payload: payload,
      })
    ).toEqual({ ...initialState, blackList: payload });
  });
  it('should handle GET_ALL_TITLES_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.GET_ALL_TITLES_REQUEST,
        payload: {},
      })
    ).toEqual({ ...initialState, isLoading: true });
  });
  it('should handle GET_ALL_TITLES_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: ActionTypes.GET_ALL_TITLES_FAILURE,
        payload: {},
      })
    ).toEqual({ ...initialState, isLoading: false });
  });
  it('should handle GET_ALL_TITLES_SUCCESS if Search true', () => {
    const payload = {
      Search: [
        { a: 1, imdbID: 1 },
        { a: 2, imdbID: 2 },
      ],
      totalResults: '100',
    };
    const movieTitles = get(payload, 'Search');
    movieTitles.forEach((el) => (el.key = el.imdbID));
    expect(
      reducer(
        { ...initialState, isLoading: true },
        {
          type: ActionTypes.GET_ALL_TITLES_SUCCESS,
          payload: payload,
        }
      )
    ).toEqual({
      ...initialState,
      isLoading: false,
      totalResults: payload.totalResults,
      movieTitles: movieTitles,
    });
  });
  it('should handle GET_ALL_TITLES_SUCCESS if Search false', () => {
    const payload = {
      Search: undefined,
    };
    expect(
      reducer(
        { ...initialState, isLoading: true },
        {
          type: ActionTypes.GET_ALL_TITLES_SUCCESS,
          payload: payload,
        }
      )
    ).toEqual({
      ...initialState,
      isLoading: false,
    });
  });
});
