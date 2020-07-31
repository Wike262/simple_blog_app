import * as consts from '../../../constans';
import * as types from '../../../types';

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

export const receive = (user: any) => ({
	type: consts.RECEIVE_USER,
	payload: {
		loading: false,
		user: user.user,
	},
});

export const setFavoriteArticles = (articles: Array<types.Article>) => ({
	type: consts.SET_FAVORITE_ARTICLES,
	payload: {
		favotire: articles,
	},
});

export const receiveError = (error: any): types.FetchErrorUser => ({
	type: consts.RECEIVE_ERROR_USER,
	payload: {
		loading: false,
		error,
	},
});

export const addToFavorite = (articleSlug: string) => (articles: any): types.AddArticleToFavorite => ({
	type: consts.ADD_ARTICLE_TO_FAVORITE,
	payload: {
		loading: false,
		articles: articles.article,
		articleSlug,
	},
});

export const removeFromFavorite = (articleSlug: string) => (articles: any): types.RemoveArticleFroFavorite => ({
	type: consts.REMOVE_ARTICLE_FROM_FAVORITE,
	payload: {
		loading: false,
		articles: articles.article,
		articleSlug,
	},
});

export const follow = (user: types.User): types.FollowUser => ({
	type: consts.FOLLOW_USER,
	payload: {
		user,
	},
});
