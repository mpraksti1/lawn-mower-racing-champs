import React from 'react';
import Button from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Button />);
});