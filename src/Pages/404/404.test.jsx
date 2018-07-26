import React from 'react';
import ErrorPage from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<ErrorPage />);
});