import React from 'react';
import Login from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Login />);
});