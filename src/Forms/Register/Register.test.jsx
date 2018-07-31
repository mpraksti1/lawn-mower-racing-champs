import { RegistrationForm } from '.';
import theme from '../../theme';

describe('Register form component', () => {
  it('renders without crashing', () => {
    shallow(
      <RegistrationForm
        history={fakeHistory}
        register={() => {}}
        alert={{}}
      />,
    );
  });

  it('matches snapshot', () => {
    const wrapper = shallowWithTheme(
      <RegistrationForm
        history={fakeHistory}
        register={() => {}}
        alert={{}}
      />, theme,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
