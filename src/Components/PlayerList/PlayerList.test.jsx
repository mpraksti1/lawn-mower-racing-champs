import PlayerList from '.';
import theme from '../../theme';

const headerNames = ['first_name', 'last_name', 'rating', 'handedness'];
const players = [{
  first_name: 'awefff',
  last_name: 'awefawef',
  rating: 1,
  handedness: 'right',
  id: '5b5cf8b4310d217ff39015fc',
},
{
  first_name: 'awef',
  last_name: 'awfff',
  rating: 1,
  handedness: 'right',
  id: '5b5ea589310d217ff3901607',
}];

describe('The playerlist!', () => {
  it('renders without crashing', () => {
    shallow(<PlayerList />);
  });

  it('matches snapshot', () => {
    const wrapper = shallowWithTheme(
      <PlayerList headerNames={headerNames} players={players} />,
      theme,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
