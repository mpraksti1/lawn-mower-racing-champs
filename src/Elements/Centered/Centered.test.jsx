import React from 'react';
import Centered from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Centered />);
});