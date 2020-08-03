import * as constants from '../../../constants';
import * as types from '../../../types';
import { UserActions } from './userActions';

const initialState = { email: '', username: '', token: '', loading: false };

const tokenToCookies = (token: string) => {
	let date = new Date(Date.now() + 86400e3).toUTCString(); // Expires 1 day later
	document.cookie = `token=${token};path=/; expires=${date}`;
};

export default (state: types.User = initialState, action: UserActions) => {
	switch (action.type) {
		case constants.REQUEST_USER:
			return { ...state, loading: true };
		case constants.SET_FAVORITE_ARTICLES:
			return { ...state, favorites: action.payload.favorite.find((article) => article.favorite) };
		case constants.RECEIVE_USER:
			tokenToCookies(action.payload.user.token);
			return { ...state, ...action.payload.user, loading: false };
		case constants.ADD_ARTICLE_TO_FAVORITE:
			return {
				...state,
				loading: false,
				favorites: state.favorites ? [action.payload.articles].concat(state.favorites!) : [action.payload.articles],
			};
		case constants.REMOVE_ARTICLE_FROM_FAVORITE:
			return {
				...state,
				loading: false,
				favorites: state.favorites?.filter((article) => article.slug !== action.payload.articleSlug),
			};
		case constants.RECEIVE_ERROR_USER:
			return { ...state, loading: false, error: action.payload.error };
		default:
			return state;
	}
};
