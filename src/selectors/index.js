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
export const currentPageSelector = createSelector(
  mainSelector,
  (main) => main.currentPage
);
export const totalResultsSelector = createSelector(
  mainSelector,
  (main) => main.totalResults
);
export const movieTitlesSelector = createSelector(
  mainSelector,
  (main) => main.movieTitles
);
export const watchListSelector = createSelector(
  mainSelector,
  (main) => main.watchList
);
export const viewedSelector = createSelector(
  mainSelector,
  (main) => main.viewed
);
export const favoriteSelector = createSelector(
  mainSelector,
  (main) => main.favorite
);
export const blackListSelector = createSelector(
  mainSelector,
  (main) => main.blackList
);
