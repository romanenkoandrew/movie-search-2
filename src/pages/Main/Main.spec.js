import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

const initialState = {
  sideMenuIsOpen: false,
  alert: '',
  isError: false,
  hideAlert: () => {},
  isLoadingModal: false,
  getFirstData: () => {},
};

describe('Main component', () => {
  const component = shallow(<Main {...initialState} />);
  it('should render Main component', () => {
    expect(component).toMatchSnapshot();
  });
});
describe('Main component with alert', () => {
  const component = shallow(
    <Main
      sideMenuIsOpen={false}
      alert={'Test'}
      isError
      hideAlert={() => {}}
      isLoadingModal={false}
      getFirstData={() => {}}
    />
  );
  it('should render Main component', () => {
    expect(component).toMatchSnapshot();
  });
});
