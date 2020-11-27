import { createSelector } from 'reselect';
import get from 'lodash/get';

export const mainSelector = (state) => get(state, 'main');

export const sideMenuIsOpenSelector = createSelector(
  mainSelector,
  (main) => main.sideMenuIsOpen
);
export const movieTitlesSelector = createSelector(
  mainSelector,
  (main) => main.movieTitles
);
