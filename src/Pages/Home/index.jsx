
import React from 'react';
import SpeedIcon from 'react-icons/lib/md/update';
import CommunityIcon from 'react-icons/lib/md/people';
import DangerIcon from 'react-icons/lib/md/error';
import Card from '../../Components/Card';
import Text from '../../Elements/Text';
import Hero from '../../Components/Hero';
import StyledDiv from './styles';

const Home = () => (
  <div>
    <Hero>
      <Text sans xxlg spaceBelow block>Welcome to the Lawn Mowing Racing Championships!</Text>
      <Text sans thin lg block>
        Add and remove racers from the roster at will, their fate is in your hands.
      </Text>
    </Hero>
    <StyledDiv>
      <Card title="Speed!" copy="The fastest lawn mowers this side of the river, guarunteed.">
        <SpeedIcon />
      </Card>
      <Card title="Community!" copy="The largest group of LMRC enthusiests online.">
        <CommunityIcon />
      </Card>
      <Card title="Danger!" copy="This is full contact Lawn mower racing at it's best.">
        <DangerIcon />
      </Card>
    </StyledDiv>
  </div>
);

export default Home;
