import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './index';

describe('Spinner component', () => {
  it('should render Spinner component', () => {
    const component = shallow(<Spinner isLoading />);
    expect(component).toMatchSnapshot();
  });
});
