import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Header from '../../Components/AppHeader';
import Authentication from '../Auth';
import Site from '../Site';
import StyledDiv from './styles';
import 'whatwg-fetch';
import { checkAuthStatus } from '../../authUtil';

const options = {
  position: 'top center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale',
};

const App = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <StyledDiv>
      <Header checkAuthStatus={checkAuthStatus} />
      <main>
        <Switch>
          <Route path="/auth" component={Authentication} />
          <Route
            path="/"
            render={props => (
              <Site
                {...props}
                checkAuthStatus={checkAuthStatus}
              />
            )}
          />
        </Switch>
      </main>
    </StyledDiv>
  </AlertProvider>
);

export default App;
