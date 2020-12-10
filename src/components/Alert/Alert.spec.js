import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('Alert component', () => {
  it('should render Alert component with type=true', () => {
    const component = shallow(
      <Alert description='Success' type={true} closeAlert={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
  it('should render Alert component with type=false', () => {
    const component = shallow(
      <Alert description='Success' type={false} closeAlert={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});
