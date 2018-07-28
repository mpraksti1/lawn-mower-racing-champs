import React from 'react';
import { shallow } from 'enzyme';
import PlayerList from '.';

it('renders without crashing', () => {
  shallow(<PlayerList />);
});
