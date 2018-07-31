import Player from '.';

describe('Player page component', () => {
  it('renders without crashing', () => {
    shallow(<Player createPlayer={() => {}} isRequesting={false} />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Player createPlayer={() => {}} isRequesting={false} />);

    expect(wrapper).toMatchSnapshot();
  });
});
