import React from 'react';
import { shallow } from 'enzyme';
import Site from '.';

it('renders without crashing', () => {
  shallow(<Site />);
});
