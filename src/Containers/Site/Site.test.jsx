import React from 'react';
import { shallow } from 'enzyme';
import Site from '.';

describe('Site component', () => {
  it('renders without crashing', () => {
    shallow(<Site />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Site />);

    expect(wrapper).toMatchSnapshot();
  });
});
