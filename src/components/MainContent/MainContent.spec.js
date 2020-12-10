import React from 'react';
import { shallow } from 'enzyme';
import MainContent from './MainContent';

const initialState = {
  showAlert: () => {},
  currentPageReset: () => {},
  getAllTitles: () => {},
};
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
}));
const setUp = () => shallow(<MainContent {...initialState} />);

describe('MainContent component', () => {
  let component;
  let instance;
  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });
  it('should render MainContent component', () => {
    expect(component).toMatchSnapshot();
  });
});
