import React from 'react';
import AppHeader from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<AppHeader />);
});