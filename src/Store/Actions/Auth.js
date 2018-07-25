  import {
  REGISTER,
  LOGIN,
  LOGOUT,
} from './Types';

const api = 'https://players-api.developer.alchemy.codes/api';


async function registerRequest (user) {
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

export const register = (user) => {
  return actionTemplate(registerRequest, user, REGISTER);
};


async function loginRequest (creds) {
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

export const login = (creds) => {
  return actionTemplate(loginRequest, creds, LOGIN);
};

export const logout = () => {
  return async dispatch => {
    // Stop gap solution since I don't have access to the back end.
    // Would prefer a server-side hosted session
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('expiresIn');
    dispatch({ type: LOGOUT });
  };
};

const actionTemplate = (apiCall, formData, actionToCall) => {
  return async dispatch => {
    const onSuccess = data => {
      if (data.success) {
        // Stop gap solution since I don't have access to the back end.
        // Would prefer a server-side hosted session
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('expiresIn', `${(60 * 60 * 1000) + Date.now()}`);
        dispatch({type: actionToCall });
        return data;
      }
      return onError(data);
    }
    const onError = error => {
      return error;
    }
    try {
      const data = await apiCall(formData);
      return onSuccess(data);
    } catch (error) {
      return onError(error.message);
    }
  };
}