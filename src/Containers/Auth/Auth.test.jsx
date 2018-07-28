import React from 'react';
import { shallow } from 'enzyme';
import Auth from '.';

it('renders without crashing', () => {
  shallow(<Auth />);
});
