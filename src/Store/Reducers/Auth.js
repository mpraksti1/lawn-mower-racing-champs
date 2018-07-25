import {
  ASYNC_REQUESTED,
  REGISTER,
  LOGIN,
  LOGOUT
} from '../Actions/Types';

const initialState = {
  user: {},
  isRequesting: false,
  isUserLoggedIn: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_REQUESTED:
      return {
        ...state,
        isRequesting: true,
      }

    case REGISTER:
      return {
        ...state,
        isRequesting: false,
        isUserLoggedIn: true,
      }

    case LOGIN:
      return {
        ...state,
        isRequesting: false,
        isUserLoggedIn: true,
      }

    case LOGOUT:
      return {
        ...state,
        isRequesting: false,
        isUserLoggedIn: false,
      }

    default:
      return state
  }
}

