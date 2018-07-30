import React from 'react';
import { shallow } from 'enzyme';
import Centered from '.';

describe('Centered component', () => {
  it('renders without crashing', () => {
    shallow(
      <Centered>
        <p>A centered thing</p>
      </Centered>,
    );
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <Centered>
        <p>A centered thing</p>
      </Centered>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
