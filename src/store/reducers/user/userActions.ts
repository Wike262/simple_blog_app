import * as constants from '../../../constants';
import * as types from '../../../types';
import * as actionTypes from '../../types';

export type UserActions =
	| actionTypes.RequestUser
	| actionTypes.ReceiveUser
	| actionTypes.FetchErrorUser
	| actionTypes.AddArticleToFavorite
	| actionTypes.RemoveArticleFroFavorite
	| actionTypes.SetFavoriteArticles;

export const request = (): actionTypes.RequestUser => ({
	type: constants.REQUEST_USER,
});

export const receive = (user: any) => ({
	type: constants.RECEIVE_USER,
	payload: {
		loading: false,
		user: user.user,
	},
});

export const setFavoriteArticles = (articles: Array<types.Article>) => ({
	type: constants.SET_FAVORITE_ARTICLES,
	payload: {
		favorite: articles,
	},
});

export const receiveError = (error: any): actionTypes.FetchErrorUser => ({
	type: constants.RECEIVE_ERROR_USER,
	payload: {
		loading: false,
		error,
	},
});

export const addToFavorite = (articleSlug: string) => (articles: any): actionTypes.AddArticleToFavorite => ({
	type: constants.ADD_ARTICLE_TO_FAVORITE,
	payload: {
		loading: false,
		articles: articles.article,
		articleSlug,
	},
});

export const removeFromFavorite = (articleSlug: string) => (articles: any): actionTypes.RemoveArticleFroFavorite => ({
	type: constants.REMOVE_ARTICLE_FROM_FAVORITE,
	payload: {
		loading: false,
		articles: articles.article,
		articleSlug,
	},
});

export const follow = (user: types.User): actionTypes.FollowUser => ({
	type: constants.FOLLOW_USER,
	payload: {
		user,
	},
});
