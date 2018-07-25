import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import styled from 'styled-components';
import Auth from '../Auth';
import Site from '../Site';
import 'whatwg-fetch';

const BaseStyles = styled.div`
  font-size: 100%;
  font-family: 'Gotham';
  background: #333;
`;

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale',
};

const App = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <BaseStyles>
      <main>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Site} />
        </Switch>
      </main>
    </BaseStyles>
  </AlertProvider>
);

export default App;
