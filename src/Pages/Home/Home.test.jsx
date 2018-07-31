import Home from '.';

describe('Home page component', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
