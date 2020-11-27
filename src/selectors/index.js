import { createSelector } from 'reselect';
import get from 'lodash/get';

export const mainSelector = (state) => get(state, 'main');

export const sideMenuIsOpenSelector = createSelector(
  mainSelector,
  (main) => main.sideMenuIsOpen
);
export const isLoadingSelector = createSelector(
  mainSelector,
  (main) => main.isLoading
);
export const alertSelector = createSelector(mainSelector, (main) => main.alert);
export const isErrorSelector = createSelector(
  mainSelector,
  (main) => main.isError
);
export const movieTitlesSelector = createSelector(
  mainSelector,
  (main) => main.movieTitles
);
