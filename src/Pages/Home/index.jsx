
import React from 'react';
// import SpeedIcon from 'react-icons/lib/md/update';
// import CommunityIcon from 'react-icons/lib/md/people';
import DangerIcon from 'react-icons/lib/md/error';
import Card from '../../Components/Card';
import Text from '../../Elements/Text';
import Hero from '../../Components/Hero';
import StyledDiv from './styles';

const homeItems = [{
  title: 'Speed!',
  copy: 'The fastest lawn mowers this side of the river, guarunteed.',
  url: '/assets/images/home-item-1.jpg',
}, {
  title: 'Community!',
  copy: 'The largest group of LMRC enthusiests online.',
  url: '/assets/images/home-item-2.jpg',
}, {
  title: 'Danger!',
  copy: 'This is full contact Lawn mower racing at it\'s best.',
  url: '/assets/images/home-item-3.jpg',
}];

const Home = () => (
  <div>
    <Hero>
      <Text sans xxlg spaceBelow block>Welcome to the Lawn Mower Racing Championships!</Text>
      <Text sans thin lg block>
        Add and remove racers from the roster at will, their fate is in your hands.
      </Text>
    </Hero>
    <StyledDiv>
      {homeItems.map(homeItem => (
        <Card key={homeItem.title} title={homeItem.title} copy={homeItem.copy} bg={homeItem.url}>
          <DangerIcon />
        </Card>
      ))}
    </StyledDiv>
  </div>
);

export default Home;
