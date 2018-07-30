import React from 'react';
import { shallow } from 'enzyme';
import Roster from '.';

describe('Roster page', () => {
  it('renders without crashing', () => {
    shallow(<Roster retrievePlayers={() => {}} deletePlayer={() => {}} players={[]} />);
  });
});
