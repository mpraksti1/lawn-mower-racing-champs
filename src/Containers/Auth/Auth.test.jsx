import React from 'react';
import { shallow } from 'enzyme';
import { Auth } from '.';

describe('Auth component', () => {
  it('renders without crashing', () => {
    shallow(<Auth loginFunc={() => {}} registerFunc={() => {}} isRequesting={false} />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <Auth loginFunc={() => {}} registerFunc={() => {}} isRequesting={false} />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
