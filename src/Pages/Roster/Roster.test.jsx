import Roster from '.';

describe('Roster page component', () => {
  it('renders without crashing', () => {
    shallow(<Roster retrievePlayers={() => {}} deletePlayer={() => {}} players={[]} />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <Roster retrievePlayers={() => {}} deletePlayer={() => {}} players={[]} />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
