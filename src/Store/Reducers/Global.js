import {
  ASYNC_REQUESTED,
  ASYNC_COMPLETE,
} from '../Actions/Types';

const initialState = { isRequesting: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_REQUESTED:
      return {
        ...state,
        isRequesting: true,
      };

    case ASYNC_COMPLETE:
      return {
        ...state,
        isRequesting: false,
      };

    default:
      return state;
  }
};
