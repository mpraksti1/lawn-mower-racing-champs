import CommunityIcon from 'react-icons/lib/md/people';
import Card from '.';

describe('Card component', () => {
  it('renders without crashing', () => {
    shallow(
      <Card title="I am a card!" copy="A really good card!">
        <CommunityIcon />
      </Card>,
    );
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <Card title="I am a card!" copy="A really good card!">
        <CommunityIcon />
      </Card>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
