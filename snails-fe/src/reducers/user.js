import {
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
} from '../actions/user';

const initialStore = {};

export default function reducer(state = initialStore, action) {
  switch (action.type) {
    case ADD_USER:
      return action.user;
    case UPDATE_USER:
      return { ...state, ...action.user };
    case REMOVE_USER:
      return initialStore;
    default:
      return state;
  }
}
