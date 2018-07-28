import {
  REGISTER,
  LOGIN,
  LOGOUT,
  ASYNC_REQUESTED,
  ASYNC_COMPLETE,
} from './Types';

const api = 'https://players-api.developer.alchemy.codes/api';

const actionTemplate = (apiCall, formData, actionToCall) => async (dispatch) => {
  dispatch({ type: ASYNC_REQUESTED });

  const onError = error => error;

  const onSuccess = (data) => {
    if (data.success) {
      // Stop gap solution since I don't have access to the back end.
      // Would prefer a server-side hosted session
      window.localStorage.setItem('token', data.token);
      window.localStorage.setItem('expiresIn', `${(60 * 60 * 1000) + Date.now()}`);
      dispatch({ type: actionToCall });
      return data;
    }
    return onError(data);
  };

  try {
    const data = await apiCall(formData);
    dispatch({ type: ASYNC_COMPLETE });
    return onSuccess(data);
  } catch (error) {
    dispatch({ type: ASYNC_COMPLETE });
    return onError(error.message);
  }
};

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

export const register = user => actionTemplate(registerRequest, user, REGISTER);


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

export const login = creds => actionTemplate(loginRequest, creds, LOGIN);


export const logout = () => async (dispatch) => {
  // Stop gap solution since I don't have access to the back end.
  // Would prefer a server-side hosted session
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('expiresIn');
  dispatch({ type: LOGOUT });
};
