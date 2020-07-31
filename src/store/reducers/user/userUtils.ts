import * as types from '../../../types';
import { ThunkDispatch } from 'redux-thunk';
import { apiAction } from '../../../middleware/apiActions';
import { request, receiveError, receive, addToFavorite, removeFromFavorite, follow } from './userActions';

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
