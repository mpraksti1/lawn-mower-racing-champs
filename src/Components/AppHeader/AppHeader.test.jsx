import { AppHeader } from '.';
import theme from '../../theme';

const returnTrue = () => true;

describe('App header component', () => {
  it('renders without crashing', () => {
    shallow(<AppHeader
      history={fakeHistory}
      logoutUser={() => {}}
      checkAuthStatus={returnTrue}
    />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <AppHeader
        theme={theme}
        history={fakeHistory}
        logoutUser={() => {}}
        checkAuthStatus={returnTrue}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('has the right logo text', () => {
    const wrapper = shallowWithTheme(
      <AppHeader
        theme={theme}
        history={fakeHistory}
        logoutUser={() => {}}
        checkAuthStatus={returnTrue}
      />, theme,
    );
    const logoText = wrapper.find('.logo-text').text();

    expect(logoText).toEqual('LMRC');
  });

  it('logs user out when button is clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallowWithTheme(
      <AppHeader
        theme={theme}
        history={fakeHistory}
        logoutUser={spy}
        checkAuthStatus={returnTrue}
      />, theme,
    );

    wrapper.isLoggedIn = true;
    wrapper.hasValidToken = true;
    wrapper.find('.logout').simulate('click');

    expect(spy.calledOnce).toBe(true);
  });
});
