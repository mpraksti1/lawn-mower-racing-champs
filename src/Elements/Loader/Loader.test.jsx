import Loader from '.';

describe('Loader component', () => {
  it('renders without crashing', () => {
    shallow(<Loader />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
  });
});
