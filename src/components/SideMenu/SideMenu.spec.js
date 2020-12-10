import React from 'react';
import { shallow } from 'enzyme';
import SideMenu from './SideMenu';

describe('SideMenu component', () => {
  it('should render SideMenu component', () => {
    const component = shallow(
      <SideMenu sideMenuIsOpen toggleSideMenu={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
  it('should render SideMenu component', () => {
    const component = shallow(
      <SideMenu sideMenuIsOpen={false} toggleSideMenu={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});
