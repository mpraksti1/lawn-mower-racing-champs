import { PlayerForm } from '.';
import theme from '../../theme';

describe('Player form component', () => {
  it('renders without crashing', () => {
    shallow(
      <PlayerForm
        history={fakeHistory}
        createPlayer={() => {}}
        alert={{}}
      />,
    );
  });

  it('matches snapshot', () => {
    const wrapper = shallowWithTheme(
      <PlayerForm
        history={fakeHistory}
        createPlayer={() => {}}
        alert={{}}
      />, theme,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
