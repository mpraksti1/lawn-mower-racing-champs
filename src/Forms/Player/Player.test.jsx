import React from 'react';
import { shallow } from 'enzyme';
import Player from '.';

it('renders without crashing', () => {
  shallow(<Player />);
});
