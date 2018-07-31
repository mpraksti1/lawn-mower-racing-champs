import App from '.';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
