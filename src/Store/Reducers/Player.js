import {
  CREATE_PLAYER,
  RETRIEVE_PLAYERS,
} from '../Actions/Types';

const initialState = {
  players: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload ]
      }

    case RETRIEVE_PLAYERS:
      return {
        ...state,
        players: [ ...action.payload ]
      }

    default:
      return state
  }
}

