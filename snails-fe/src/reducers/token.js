import {
  RECEIVE_TOKEN,
} from '../actions/token';

const initialStore = null;

export default function reducer(state = initialStore, action) {
  switch (action.type) {
    case RECEIVE_TOKEN:
      return action.token;
    default:
      return state;
  }
}
