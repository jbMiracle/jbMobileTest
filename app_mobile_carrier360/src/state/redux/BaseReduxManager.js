import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default class BaseReduxManager {
  constructor() {
    const navMiddleware = createReactNavigationReduxMiddleware(
      'root',
      state => state.nav,
    );

    const sagaMonitor = this.createSagaMonitor();
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

    const persistConfig = {
      key: 'root',
      storage,
      blacklist: ['nav', 'forgotPassword'],
    };
    const persistedRootReducer = persistReducer(persistConfig, rootReducer);

    this.store = this.createStore(
      persistedRootReducer,
      applyMiddleware(navMiddleware, sagaMiddleware),
    );

    sagaMiddleware.run(rootSaga);
  }

  rehydrateStoreAsync() {
    return new Promise((resolve) => {
      persistStore(this.store, null, resolve);
    });
  }

  // To be overriden by the ReactotronicReduxManager, as there will be
  // no saga monitor in production.
  createSagaMonitor() {}

  // Just use the standard createStore function from redux in production.
  // This will also be overriden by the ReactotronicReduxManager.
  createStore(...args) {
    return createStore(...args);
  }
}
