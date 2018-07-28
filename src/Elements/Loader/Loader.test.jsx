import React from 'react';
import { shallow } from 'enzyme';
import Loader from '.';

it('renders without crashing', () => {
  shallow(<Loader />);
});
