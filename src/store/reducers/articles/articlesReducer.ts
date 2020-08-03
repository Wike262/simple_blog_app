import * as constants from '../../../constants';
import * as types from '../../../types';
import { ArticlesActions } from './articlesActions';
import commentsReducer from './comments/commentsReducer';

const initialState = { articles: [], loading: false };

export default (
	state: { articles: Array<types.Article>; loading: boolean } = initialState,
	action: ArticlesActions
) => {
	switch (action.type) {
		case constants.REQUEST_ARTICLES:
			return { ...state, loading: true };
		case constants.RECEIVE_ARTICLES:
			return {
				...state,
				articles: action.payload.articles,
				articlesCount: action.payload.articlesCount,
				loading: false,
			};
		case constants.RECEIVE_ERROR_ARTICLES:
			return { ...state, loading: false, error: action.payload.error };
		case constants.REQUEST_ARTICLES_COMMENTS:
		case constants.RECEIVE_ARTICLES_COMMENTS:
		case constants.RECEIVE_ERROR_ARTICLES_COMMENTS:
		case constants.REMOVE_ARTICLES_COMMENT:
		case constants.ADD_ARTICLES_COMMENT:
			return commentsReducer(state, action);
		default:
			return state;
	}
};
