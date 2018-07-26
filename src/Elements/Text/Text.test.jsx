import React from 'react';
import Text from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Text />);
});