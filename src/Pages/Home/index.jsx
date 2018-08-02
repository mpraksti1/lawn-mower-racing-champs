
import React from 'react';
import SpeedIcon from 'react-icons/lib/md/update';
import CommunityIcon from 'react-icons/lib/md/people';
import DangerIcon from 'react-icons/lib/md/error';
import Card from '../../Components/Card';
import Text from '../../Elements/Text';
import Hero from '../../Components/Hero';
import { StyledWrapper, StyledDiv } from './styles';

const homeItems = [{
  title: 'Speed!',
  copy: 'The fastest lawn mowers this side of the river, guaranteed.',
  url: '/assets/images/home-item-1.jpg',
  icon: () => <SpeedIcon />,
}, {
  title: 'Community!',
  copy: 'The largest group of LMRC enthusiasts online.',
  url: '/assets/images/home-item-2.jpg',
  icon: () => <CommunityIcon />,
}, {
  title: 'Danger!',
  copy: 'This is full contact lawn mower racing at it\'s best.',
  url: '/assets/images/home-item-3.jpg',
  icon: () => <DangerIcon />,
}];

const Home = () => (
  <StyledWrapper>
    <Hero>
      <Text sans xxlg spaceBelow block>
      Welcome to the Lawn Mower Racing Championships Fantasy League!
      </Text>
      <Text sans xlg spaceBelow block>(More commonly referred to as the LMRCFL)</Text>
    </Hero>
    <div>
      <Text sans xxlg spaceAbove block alignCenter>What the heck is it?</Text>
      <Text sans spaceAround block alignCenter>
        Lawn mower racing was started back in 1973 by an Irishman named Jim Gavin,
        in a pub in Wisborough Green, West Sussex where conversation turned to the
        topic of motorsports.  Jim wanted to create a form of motorsport that didn’t
        involve lots of money and was readily accessible to everyone. As Jim and the
        group he lunched with looked out across the village green, there was the
        groundsman mowing the cricket pitch. It was then they realized everyone had a
        lawn mower in their garden shed so they said “let’s race them”!
        The main objectives were no sponsorship, no commercialism, no cash prizes and
        no modified mower engines. This would keep costs down and resulted in lawnmower
        racing being described by Motor Sport News as “the cheapest form of motorsport in the U.K.”
        Lawn Mower Racing takes place all over the world now!
      </Text>
    </div>
    <StyledDiv>
      {homeItems.map(homeItem => (
        <Card key={homeItem.title} title={homeItem.title} copy={homeItem.copy} bg={homeItem.url}>
          {homeItem.icon()}
        </Card>
      ))}
    </StyledDiv>
  </StyledWrapper>
);

export default Home;
