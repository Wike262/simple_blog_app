import * as consts from '../../../constans';
import * as types from '../../../types';
import { ArticlesActions } from './articlesActions';
import commentsReducer from './comments/commentsReducer';

const initialState = { articles: [], loading: false };

export default (
	state: { articles: Array<types.Article>; loading: boolean } = initialState,
	action: ArticlesActions
) => {
	switch (action.type) {
		case consts.REQUEST_ARTICLES:
			return { ...state, loading: true };
		case consts.RECEIVE_ARTICLES:
			return {
				...state,
				articles: action.payload.articles,
				articlesCount: action.payload.articlesCount,
				loading: false,
			};
		case consts.RECEIVE_ERROR_ARTICLES:
			return { ...state, loading: false, error: action.payload.error };
		case consts.REQUEST_ARTICLES_COMMENTS:
		case consts.RECEIVE_ARTICLES_COMMENTS:
		case consts.RECEIVE_ERROR_ARTICLES_COMMENTS:
		case consts.REMOVE_ARTICLES_COMMENT:
		case consts.ADD_ARTICLES_COMMENT:
			return commentsReducer(state, action);
		default:
			return state;
	}
};
