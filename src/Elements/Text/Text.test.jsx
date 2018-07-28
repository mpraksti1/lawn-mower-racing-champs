import React from 'react';
import { shallow } from 'enzyme';
import Text from '.';

it('renders without crashing', () => {
  shallow(<Text />);
});
