import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './reducers';
import { coreMiddleware, featureMiddleware } from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhander = composeEnhancers(applyMiddleware(...featureMiddleware, ...coreMiddleware, logger, thunk));
export const store = createStore(rootReducer, {}, enhander);

export default store;
