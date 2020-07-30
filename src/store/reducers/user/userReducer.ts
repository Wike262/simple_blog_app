import * as consts from '../../../constans';
import * as types from '../../../types';
import { UserActions } from './userActions';

const initialState = { email: '', username: '', token: '', loading: false };

const tokenToCookeis = (token: string) => {
	let date = new Date(Date.now() + 86400e3).toUTCString();
	document.cookie = `token=${token};path=/; expires=${date}`;
};

export default (state: types.User = initialState, action: UserActions) => {
	switch (action.type) {
		case consts.REQUEST_USER:
			return { ...state, loading: true };
		case consts.SET_FAVORITE_ARTICLES:
			return { ...state, favorites: action.payload.favorite.find((article) => article.favorited) };
		case consts.RECEIVE_USER:
			tokenToCookeis(action.payload.user.token);
			return { ...state, ...action.payload.user, loading: false };
		case consts.ADD_ARTICLE_TO_FAVORITE:
			return {
				...state,
				loading: false,
				favorites: state.favorites ? [action.payload.articles].concat(state.favorites!) : [action.payload.articles],
			};
		case consts.REMOVE_ARTICLE_FROM_FAVORITE:
			return {
				...state,
				loading: false,
				favorites: state.favorites?.filter((article) => article.slug !== action.payload.articleSlug),
			};
		case consts.RECEIVE_ERROR_USER:
			return { ...state, loading: false, error: action.payload.error };
		default:
			return state;
	}
};
