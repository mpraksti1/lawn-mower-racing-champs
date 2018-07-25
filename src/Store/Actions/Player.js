import {
  CREATE_PLAYER,
  DELETE_PLAYER,
  RETRIEVE_PLAYERS,
} from './Types';

const api = 'https://players-api.developer.alchemy.codes/api';

async function retrievePlayersRequest (token) {
  const response = await fetch(`${api}/players`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const retrievePlayers = (player) => {
  return async dispatch => {
    const onSuccess = data => {
      dispatch({
        type: RETRIEVE_PLAYERS,
        payload: data,
      });
      return data;
    }
    const onError = error => {
      return error;
    }
    try {
      const data = await retrievePlayersRequest(player);
      return onSuccess(data);
    } catch (error) {
      return onError(error.message);
    }
  };
};


async function createPlayerRequest (player, token) {
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

export const createPlayer = (player, token) => {
  return async dispatch => {
    const onSuccess = data => {
      dispatch({
        type: CREATE_PLAYER,
      });
      return data;
    }
    const onError = error => {
      return error;
    }
    try {
      const data = await createPlayerRequest(player, token);
      return onSuccess(data);
    } catch (error) {
      return onError(error);
    }
  };
};


async function deletePlayerRequest (id, token) {
  const response = await fetch(`${api}/players/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  });
  return response.json();
}

export const deletePlayer = (id, token) => {
  return async dispatch => {
    const onSuccess = data => {
      dispatch({
        type: DELETE_PLAYER,
      });
      return data;
    }
    const onError = error => {
      return error;
    }
    try {
      const data = await deletePlayerRequest(id, token);
      return onSuccess(data);
    } catch (error) {
      return onError(error);
    }
  };
};
