import ErrorPage from '.';

describe('404 component', () => {
  it('renders without crashing', () => {
    shallow(<ErrorPage />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<ErrorPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
