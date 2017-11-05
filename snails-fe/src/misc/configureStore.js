import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { localStorage } from 'redux-persist/storages';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

export default function configureStore() {
  const middlewares = [thunk, logger];

  return new Promise((resolve, reject) => {
    try {
      const store = createStore(
        reducer,
        undefined,
        compose(
          applyMiddleware(...middlewares),
          autoRehydrate(),
        ),
      );

      persistStore(
        store,
        {},
        () => resolve(store),
      );
    } catch (e) {
      reject(e);
    }
  });
}
