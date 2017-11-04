import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

export default function configureStore() {
  const middlewares = [thunk, logger];

  return createStore(
    reducer,
    undefined,
    compose(applyMiddleware(...middlewares)),
  );
}
