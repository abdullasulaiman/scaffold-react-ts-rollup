import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV !== 'production';

const composeEnhancer = (isProd && composeEnhancers);

export const store = createStore(rootReducers, {}, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
