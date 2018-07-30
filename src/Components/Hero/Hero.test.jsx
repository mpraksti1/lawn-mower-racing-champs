import Hero from '.';

describe('Hero component', () => {
  it('renders without crashing', () => {
    shallow(
      <Hero>
        <p>Hero!</p>
      </Hero>,
    );
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <Hero imgUrl="http://via.placeholder.com/350x150">
        <p>Hero!</p>
      </Hero>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
