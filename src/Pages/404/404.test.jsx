import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from '.';

it('renders without crashing', () => {
  shallow(<ErrorPage />);
});
