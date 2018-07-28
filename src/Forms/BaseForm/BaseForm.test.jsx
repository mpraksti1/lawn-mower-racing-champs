import React from 'react';
import { shallow } from 'enzyme';
import BaseForm from '.';

it('renders without crashing', () => {
  shallow(<BaseForm />);
});
