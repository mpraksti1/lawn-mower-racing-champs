import React from 'react';
import BaseForm from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<BaseForm />);
});