import { AppHeader } from '.';
import theme from '../../theme';

const returnTrue = () => true;

describe('App header component', () => {
  it('renders without crashing', () => {
    shallow(<AppHeader
      history={fakeHistory}
      logoutUser={() => {}}
      checkAuthStatus={returnTrue}
      alert={{}}
    />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <AppHeader
        theme={theme}
        history={fakeHistory}
        logoutUser={() => {}}
        checkAuthStatus={returnTrue}
        alert={{}}
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
        alert={{}}
      />, theme,
    );
    const logoText = wrapper.find('.logo-text').text();

    expect(logoText).toEqual('LMRCFL');
  });

  it('logs user out when button is clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallowWithTheme(
      <AppHeader
        theme={theme}
        history={fakeHistory}
        logoutUser={spy}
        checkAuthStatus={returnTrue}
        alert={{ success: () => {} }}
      />, theme,
    );

    wrapper.isLoggedIn = true;
    wrapper.hasValidToken = true;
    wrapper.find('.logout').simulate('click');

    expect(spy.calledOnce).toBe(true);
  });
});
