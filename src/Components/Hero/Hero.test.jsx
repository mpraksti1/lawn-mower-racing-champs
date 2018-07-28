import React from 'react';
import { shallow } from 'enzyme';
import Hero from '.';

it('renders without crashing', () => {
  shallow(<Hero />);
});
