import ProtectedRoute from '.';

describe('Protected route component', () => {
  it('renders without crashing', () => {
    shallow(<ProtectedRoute isAllowed />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<ProtectedRoute isAllowed component={() => {}} />);
    expect(wrapper).toMatchSnapshot();

    const wrapperUnAuth = shallow(<ProtectedRoute isAllowed={false} component={() => {}} />);
    expect(wrapperUnAuth).toMatchSnapshot();
  });
});
