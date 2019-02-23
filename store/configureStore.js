import { createStore, applyMiddleware, compose } from 'redux';
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import sagas from '../sagas';


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default function configureStore() {
  // const logger = createLogger({
  //   // ...options
  // });
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
  ;
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware), //logger
  );
  const store = createStore(rootReducer, enhancer);

  // Start all of our sagas
  sagaMiddleware.run(sagas);

  return store;
}
