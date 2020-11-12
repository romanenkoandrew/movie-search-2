import { createSelector } from 'reselect';
import get from 'lodash/get';

export const mainSelector = (state) => get(state, 'main');

export const openSelector = createSelector(mainSelector, (main) => main.open);
export const titleSelector = createSelector(mainSelector, (main) => main.title);
export const sideMenuIsOpenSelector = createSelector(
  mainSelector,
  (main) => main.sideMenuIsOpen
);
