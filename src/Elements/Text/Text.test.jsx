import Text from '.';

describe('Text component', () => {
  it('renders without crashing', () => {
    shallow(<Text>Text!</Text>);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Text>Text!</Text>);

    expect(wrapper).toMatchSnapshot();
  });
});
