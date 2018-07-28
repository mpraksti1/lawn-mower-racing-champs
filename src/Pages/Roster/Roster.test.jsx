import React from 'react';
import { shallow } from 'enzyme';
import Roster from '.';

it('renders without crashing', () => {
  shallow(<Roster />);
});
