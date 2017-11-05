import { combineReducers } from 'redux';
// individual reducers imports
import userReducer from './user';
import tokenReducer from './token';

const AppReducer = combineReducers({
  userReducer,
  tokenReducer,
});

export default AppReducer;
