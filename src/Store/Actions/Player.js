import {
  CREATE_PLAYER,
  DELETE_PLAYER,
  RETRIEVE_PLAYERS,
  ASYNC_REQUESTED,
  ASYNC_COMPLETE,
} from './Types';

const api = 'https://players-api.developer.alchemy.codes/api';

async function retrievePlayersRequest(token) {
  const response = await fetch(`${api}/players`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
}

export const retrievePlayers = player => async (dispatch) => {
  const onError = error => error;

  const onSuccess = (data) => {
    dispatch({
      type: RETRIEVE_PLAYERS,
      payload: data.players,
    });
    return data;
  };

  try {
    const data = await retrievePlayersRequest(player);
    return onSuccess(data);
  } catch (error) {
    return onError(error.message);
  }
};


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

export const createPlayer = (player, token) => async (dispatch) => {
  dispatch({ type: ASYNC_REQUESTED });

  const onError = error => error;

  const onSuccess = (data) => {
    dispatch({
      type: CREATE_PLAYER,
      payload: data,
    });
    return data;
  };

  try {
    const data = await createPlayerRequest(player, token);
    dispatch({ type: ASYNC_COMPLETE });
    return onSuccess(data);
  } catch (error) {
    dispatch({ type: ASYNC_COMPLETE });
    return onError(error);
  }
};


async function deletePlayerRequest(id, token) {
  const response = await fetch(`${api}/players/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  });
  return response.json();
}

export const deletePlayer = (id, token) => async (dispatch) => {
  const onError = error => error;

  const onSuccess = (data) => {
    dispatch({
      type: DELETE_PLAYER,
    });
    return data;
  };

  try {
    const data = await deletePlayerRequest(id, token);
    return onSuccess(data);
  } catch (error) {
    return onError(error);
  }
};
