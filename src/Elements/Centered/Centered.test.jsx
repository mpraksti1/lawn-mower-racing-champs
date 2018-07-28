import React from 'react';
import { shallow } from 'enzyme';
import Centered from '.';

it('renders without crashing', () => {
  shallow(<Centered />);
});
