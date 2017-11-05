import { combineReducers } from 'redux';
// individual reducers imports
import user from './user';
import token from './token';

const AppReducer = combineReducers({
  user,
  token,
});

export default AppReducer;
