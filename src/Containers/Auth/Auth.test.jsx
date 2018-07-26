import React from 'react';
import Auth from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Auth />);
});