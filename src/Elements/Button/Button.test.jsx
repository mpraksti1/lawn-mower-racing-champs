import Button from '.';

describe('Button component', () => {
  it('renders without crashing', () => {
    shallow(<Button>Submit</Button>);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Button>Submit</Button>);

    expect(wrapper).toMatchSnapshot();
  });
});
