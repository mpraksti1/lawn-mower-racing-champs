import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '.';

it('renders without crashing', () => {
  shallow(<AppHeader />);
});
