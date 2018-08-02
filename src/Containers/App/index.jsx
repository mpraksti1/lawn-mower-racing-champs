import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider as AlertProvider } from 'react-alert';
import DeleteIcon from 'react-icons/lib/md/clear';
import SuccessIcon from 'react-icons/lib/md/done';
import ErrorIcon from 'react-icons/lib/md/error';
import Header from '../../Components/AppHeader';
import Authentication from '../Auth';
import Site from '../Site';
import Button from '../../Elements/Button';
import Text from '../../Elements/Text';
import { StyledDiv, StyledAlert } from './styles';
import { checkAuthStatus } from '../../authUtil';
import 'whatwg-fetch';

const alertOptions = {
  position: 'top center',
  timeout: 5000000,
  transition: 'scale',
};

const AlertTemplate = (props) => {
  const { message, close, options } = props;
  const bg = options.type === 'error' ? 'red' : 'green';

  return (
    <StyledAlert bg={bg}>
      <div className="status-icon">
        {options.type === 'success' && <SuccessIcon />}
        {options.type === 'error' && <ErrorIcon />}
      </div>
      <Text xsm sans>{message}</Text>
      <Button className="close" isLink onClick={close}>
        <DeleteIcon />
      </Button>
    </StyledAlert>
  );
};

AlertTemplate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};


const App = () => (
  <AlertProvider template={AlertTemplate} {...alertOptions}>
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
