import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFound';

describe('PageNotFound component', () => {
  it('should render PageNotFound component', () => {
    const component = shallow(<PageNotFound />);
    expect(component).toMatchSnapshot();
  });
});
