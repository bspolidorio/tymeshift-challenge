import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './sagas';
import { History } from 'history';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history: History) {
  const initialState = {};
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const rootReducer = createReducer({ router: connectRouter(history) });

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(rootSaga);

  (store as any).runSaga = sagaMiddleware.run;
  (store as any).asyncReducers = {};

  return { store };
}
