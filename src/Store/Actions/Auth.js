import {
  REGISTER,
  LOGIN,
  LOGOUT,
  ASYNC_REQUESTED,
  ASYNC_COMPLETE,
} from './Types';
import to from '../../awaitToJs';

const api = 'https://players-api.developer.alchemy.codes/api';

const actionTemplate = (apiCall, formData, actionToCall) => async (dispatch) => {
  dispatch({ type: ASYNC_REQUESTED });

  let err;
  let callResponse;

  const onError = (error) => {
    throw new Error(error.message);
  };

  const onSuccess = (response) => {
    if (response.success) {
      // Stop gap solution since I don't have access to the back end.
      // Would prefer a server-side hosted session
      window.localStorage.setItem('token', response.token);
      window.localStorage.setItem('expiresIn', `${(60 * 60 * 1000) + Date.now()}`);
      dispatch({ type: actionToCall });
      return response;
    }
    return onError(response.error);
  };

  // eslint-disable-next-line prefer-const
  [err, callResponse] = await to(apiCall(formData));

  if (callResponse) {
    dispatch({ type: ASYNC_COMPLETE });
    return onSuccess(callResponse);
  }

  if (err) {
    dispatch({ type: ASYNC_COMPLETE });
    return onError(err);
  }

  return onError({ message: 'Whoops, there was a problem with your request' });
};


// Requests

async function loginRequest(creds) {
  const data = JSON.stringify(creds);
  const response = await fetch(`${api}/login`, {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: data,
  });
  return response.json();
}

async function registerRequest(user) {
  const data = JSON.stringify(user);
  const response = await fetch(`${api}/user`, {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: data,
  });
  return response.json();
}


// Thunks

export const login = creds => actionTemplate(loginRequest, creds, LOGIN);

export const register = user => actionTemplate(registerRequest, user, REGISTER);

export const logout = () => async (dispatch) => {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('expiresIn');
  dispatch({ type: LOGOUT });
};
