import {
  RECEIVE_TOKEN,
  REMOVE_TOKEN,
} from '../actions/token';

const initialStore = null;

export default function reducer(state = initialStore, action) {
  switch (action.type) {
    case RECEIVE_TOKEN:
      return action.token;
    case REMOVE_TOKEN:
      return null;
    default:
      return state;
  }
}
