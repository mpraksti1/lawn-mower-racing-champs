import React from 'react';
import Home from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Home />);
});