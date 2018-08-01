import {
  ASYNC_REQUESTED,
  ASYNC_COMPLETE,
} from './Types';

export const requestMade = () => ({ type: ASYNC_REQUESTED });
export const requestCompleted = () => ({ type: ASYNC_COMPLETE });
