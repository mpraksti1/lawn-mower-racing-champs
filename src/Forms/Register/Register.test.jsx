import { RegisterForm } from '.';
import theme from '../../theme';

describe('Register form component', () => {
  it('renders without crashing', () => {
    shallow(
      <RegisterForm
        history={fakeHistory}
        register={() => {}}
        alert={{}}
      />,
    );
  });

  it('matches snapshot', () => {
    const wrapper = shallowWithTheme(
      <RegisterForm
        history={fakeHistory}
        register={() => {}}
        alert={{}}
      />, theme,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
