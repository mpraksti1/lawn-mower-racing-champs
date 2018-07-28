import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

it('renders without crashing', () => {
  shallow(<Button />);
});
