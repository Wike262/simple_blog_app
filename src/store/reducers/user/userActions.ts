import * as consts from '../../../constans';
import * as types from '../../../types';
import { ThunkDispatch } from 'redux-thunk';
import { apiAction } from '../../../middleware/apiActions';

export type UserActions =
	| types.RequestUser
	| types.ReceiveUser
	| types.FetchErrorUser
	| types.AddArticleToFavorite
	| types.RemoveArticleFroFavorite
	| types.SetFavoriteArticles;

export const request = (): types.RequestUser => ({
	type: consts.REQUEST_USER,
});

export function receive(user: any) {
	return {
		type: consts.RECEIVE_USER,
		payload: {
			loading: false,
			user: user.user,
		},
	};
}

export const setFavoriteArticles = (articles: Array<types.Article>) => {
	return {
		type: consts.SET_FAVORITE_ARTICLES,
		payload: {
			favotire: articles,
		},
	};
};

export const receiveError = (error: any): types.FetchErrorUser => ({
	type: consts.RECEIVE_ERROR_USER,
	payload: {
		loading: false,
		error,
	},
});

export const addToFavorite = (articleSlug: string) => (articles: any): types.AddArticleToFavorite => {
	return {
		type: consts.ADD_ARTICLE_TO_FAVORITE,
		payload: {
			loading: false,
			articles: articles.article,
			articleSlug,
		},
	};
};

export const removeFromFavorite = (articleSlug: string) => (articles: any): types.RemoveArticleFroFavorite => {
	return {
		type: consts.REMOVE_ARTICLE_FROM_FAVORITE,
		payload: {
			loading: false,
			articles: articles.article,
			articleSlug,
		},
	};
};

export const follow = (user: types.User): types.FollowUser => {
	return {
		type: consts.FOLLOW_USER,
		payload: {
			user,
		},
	};
};

export const loginWithToken = (token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: '/user',
			onSuccess: receive,
			onFailure: receiveError,
			label: 'LOGIN_WITH_TOKEN',
			token,
		})
	);
};

export const login = (email: string, password: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	const req = { user: { email, password } };

	dispatch(request());
	return dispatch(
		apiAction({
			url: '/users/login',
			method: 'POST',
			onSuccess: receive,
			onFailure: receiveError,
			label: 'LOGIN',
			data: JSON.stringify(req),
		})
	);
};

export const register = (username: string, email: string, password: string) => (
	dispatch: ThunkDispatch<{}, {}, any>
) => {
	dispatch(request());
	const req = { user: { username, email, password } };

	return dispatch(
		apiAction({
			url: '/users',
			method: 'POST',
			onSuccess: receive,
			onFailure: receiveError,
			label: 'REGISTER',
			data: JSON.stringify(req),
		})
	);
};

export const updateUser = (user: types.User, token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	const req = { user };

	dispatch(request());
	return dispatch(
		apiAction({
			url: '/user',
			method: 'PUT',
			onSuccess: receive,
			onFailure: receiveError,
			token,
			label: 'UPDATE_USER',
			data: JSON.stringify(req),
		})
	);
};

export const addArticleToFavorite = (articleSlug: string, token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: `/articles/${articleSlug}/favorite`,
			method: 'POST',
			onSuccess: addToFavorite(articleSlug),
			onFailure: receiveError,
			label: 'ADD_ARTICLE_TO_FAVORITE',
			token,
		})
	);
};

export const removeArticleFromFavoritre = (articleSlug: string, token: string) => (
	dispatch: ThunkDispatch<{}, {}, any>
) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: `/articles/${articleSlug}/favorite`,
			method: 'DELETE',
			onSuccess: removeFromFavorite(articleSlug),
			onFailure: receiveError,
			label: 'DELETE_ARTICLE_TO_FAVORITE',
			token,
		})
	);
};

export const followUser = (username: string, token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: `/profiles/${username}/follow`,
			method: 'POST',
			onSuccess: follow,
			onFailure: receiveError,
			label: 'FOLLOW_USER',
			token,
		})
	);
};

export const unFollowUser = (username: string, token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: `/profiles/${username}/follow`,
			method: 'DELETE',
			onSuccess: follow,
			onFailure: receiveError,
			label: 'UNFOLLOW_USER',
			token,
		})
	);
};
