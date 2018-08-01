import {
  CREATE_PLAYER,
  DELETE_PLAYER,
  RETRIEVE_PLAYERS,
  ASYNC_REQUESTED,
  ASYNC_COMPLETE,
} from './Types';
import to from '../../awaitToJs';

const api = 'https://players-api.developer.alchemy.codes/api';


// Requests

async function retrievePlayersRequest(token) {
  const response = await fetch(`${api}/players`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
}

async function createPlayerRequest(player, token) {
  const data = JSON.stringify(player);

  const response = await fetch(`${api}/players`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: data,
  });
  return response.json();
}

async function deletePlayerRequest(id, token) {
  const response = await fetch(`${api}/players/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  });
  return response.json();
}


// Thunks

export const retrievePlayers = player => async (dispatch) => {
  dispatch({ type: ASYNC_REQUESTED });

  let err;
  let callResponse;

  const onError = (error) => {
    throw new Error(error.message);
  };

  const onSuccess = (response) => {
    dispatch({
      type: RETRIEVE_PLAYERS,
      payload: response.players,
    });
    return response;
  };

  // eslint-disable-next-line prefer-const
  [err, callResponse] = await to(retrievePlayersRequest(player));

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

export const createPlayer = (player, token) => async (dispatch) => {
  dispatch({ type: ASYNC_REQUESTED });

  let err;
  let callResponse;

  const onError = (error) => {
    throw new Error(error.message);
  };

  const onSuccess = (response) => {
    dispatch({
      type: CREATE_PLAYER,
      payload: response,
    });
    return response;
  };
  // eslint-disable-next-line prefer-const
  [err, callResponse] = await to(createPlayerRequest(player, token));

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

export const deletePlayer = (id, token) => async (dispatch) => {
  dispatch({ type: ASYNC_REQUESTED });

  let err;
  let callResponse;

  const onError = (error) => {
    throw new Error(error.message);
  };
  const onSuccess = (data) => {
    dispatch({
      type: DELETE_PLAYER,
    });
    return data;
  };

  // eslint-disable-next-line prefer-const
  [err, callResponse] = await to(deletePlayerRequest(id, token));

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
