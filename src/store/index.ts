import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import apiMiddleware from '../middleware/api';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(apiMiddleware, thunkMiddleware, loggerMiddleware));

export default store;
