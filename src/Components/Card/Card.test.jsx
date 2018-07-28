import React from 'react';
import { shallow } from 'enzyme';
import Card from '.';

it('renders without crashing', () => {
  shallow(<Card />);
});
