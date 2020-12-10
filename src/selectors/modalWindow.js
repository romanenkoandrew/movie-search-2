import { createSelector } from 'reselect';
import get from 'lodash/get';

export const modalWindow = (state) => get(state, 'modalWindow');

export const isOpenModalSelector = createSelector(
  modalWindow,
  (modalWindow) => modalWindow.isOpenModal
);
export const isLoadingSelector = createSelector(
  modalWindow,
  (modalWindow) => modalWindow.isLoading
);
export const aboutMovieSelector = createSelector(
  modalWindow,
  (modalWindow) => modalWindow.aboutMovie
);
