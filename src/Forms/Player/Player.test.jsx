import React from 'react';
import Player from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});