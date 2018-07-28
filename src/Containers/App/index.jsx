import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import AppHeader from '../../Components/AppHeader';
import Auth from '../Auth';
import Site from '../Site';
import StyledDiv from './styles';
import 'whatwg-fetch';

const options = {
  position: 'top center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale',
};

const App = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <StyledDiv>
      <AppHeader />
      <main>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Site} />
        </Switch>
      </main>
    </StyledDiv>
  </AlertProvider>
);

export default App;
