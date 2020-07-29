import { combineReducers } from 'redux';
import user from './user/userReducer';
import articles from './articles/articlesReducer';

const rootReducer = combineReducers({ user, articles });

export default rootReducer;
