import { LoginForm } from '.';
import theme from '../../theme';

describe('Login component', () => {
  it('renders without crashing', () => {
    shallow(
      <LoginForm
        history={fakeHistory}
        login={() => {}}
        alert={{}}
      />,
    );
  });

  it('matches snapshot', () => {
    const wrapper = shallowWithTheme(
      <LoginForm
        history={fakeHistory}
        login={() => {}}
        alert={{}}
      />, theme,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
