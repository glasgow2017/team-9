import { combineReducers } from 'redux';
// individual reducers imports
import userReducer from './user';

const AppReducer = combineReducers({
  userReducer,
});

export default AppReducer;
