import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';
import { coreMiddleware, featureMiddleware } from './middleware';

export const store = createStore(rootReducer, {}, applyMiddleware(...featureMiddleware, ...coreMiddleware));

export default store;
