import React from 'react';
import { shallow } from 'enzyme';
import TableContainer from './TableContainer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
}));
const initialState = {
  movieTitles: [],
  watchList: [],
  viewed: [],
  favorite: [],
  blackList: [],
  isLoading: false,
  getAllTitles: () => {},
  getTitleByID: () => {},
  currentPageIncrement: () => {},
  currentPageDecrement: () => {},
  searchBlockValues: {},
  currentPage: 1,
  totalResults: '100',
  isOpenModal: false,
  aboutMovie: {},
  toggleModal: () => {},
  upgradeWatchList: () => {},
  upgradeViewedList: () => {},
  upgradeFavoriteList: () => {},
  upgradeBlackList: () => {},
};
const setUp = () => shallow(<TableContainer {...initialState} />);

describe('TableContainer component', () => {
  let component;
  let instance;
  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });
  it('should render TableContainer component', () => {
    expect(component).toMatchSnapshot();
  });
});
