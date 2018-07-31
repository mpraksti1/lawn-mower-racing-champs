import CommunityIcon from 'react-icons/lib/md/people';
import Card from '.';

describe('Card component', () => {
  it('renders without crashing', () => {
    shallow(
      <Card title="I am a card!" copy="A really good card!" bg="http://www.abc.net.au/news/image/7202178-3x2-940x627.jpg">
        <CommunityIcon />
      </Card>,
    );
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <Card title="I am a card!" copy="A really good card!" bg="http://www.abc.net.au/news/image/7202178-3x2-940x627.jpg">
        <CommunityIcon />
      </Card>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
