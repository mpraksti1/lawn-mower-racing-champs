import BGVideo from '.';

describe('BG video component', () => {
  it('renders without crashing', () => {
    shallow(<BGVideo url="http://google.com" />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<BGVideo url="http://google.com" />);

    expect(wrapper).toMatchSnapshot();
  });
});
