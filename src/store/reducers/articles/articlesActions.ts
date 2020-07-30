import * as consts from '../../../constans';
import * as types from '../../../types';
import { ThunkDispatch } from 'redux-thunk';
import { apiAction } from '../../../middleware/apiActions';
import { setFavoriteArticles } from '../user/userActions';

export type ArticlesActions =
	| types.RequestArticles
	| types.ReceiveArticles
	| types.FetchErrorArticles
	| types.RequestArticlesComments
	| types.ReceiveArticlesComments
	| types.FetchErrorArticlesComments
	| types.AddArticlesComments
	| types.RemoveArticlesComments;

export const request = (): types.RequestArticles => ({
	type: consts.REQUEST_ARTICLES,
});

export const receive = (articles: any): types.ReceiveArticles => {
	return {
		type: consts.RECEIVE_ARTICLES,
		payload: {
			loading: false,
			articles: articles.articles,
		},
	};
};

export const add = (articles: any): types.ReceiveArticles => {
	return {
		type: consts.RECEIVE_ARTICLES,
		payload: {
			loading: false,
			articles: [articles.article],
		},
	};
};

export const favorite = (articleSlug: string) => (articles: any): types.AddArticleToFavorite => {
	return {
		type: consts.ADD_ARTICLE_TO_FAVORITE,
		payload: {
			loading: false,
			articles: articles.article,
			articleSlug,
		},
	};
};

export const receiveError = (error: any): types.FetchErrorArticles => ({
	type: consts.RECEIVE_ERROR_ARTICLES,
	payload: {
		loading: false,
		error,
	},
});

export const getArticlesFeed = (token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: '/articles/feed',
			onSuccess: receive,
			onSuccessHandler: setFavoriteArticles,
			onFailure: receiveError,
			label: 'GET_ARTICLES_FEED',
			token,
		})
	);
};

export const getArticles = (token?: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: '/articles',
			onSuccess: receive,
			onSuccessHandler: setFavoriteArticles,
			onFailure: receiveError,
			label: 'GET_ARTICLES',
			token,
		})
	);
};

export const getUserArticles = (username: string, token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: `/articles?author=${username}`,
			onSuccess: receive,
			onSuccessHandler: setFavoriteArticles,
			onFailure: receiveError,
			label: 'GET_USER_ARTICLES',
			token,
		})
	);
};

export const getUserFavoritedArticles = (username: string, token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: `/articles?favorited=${username}`,
			onSuccess: receive,
			onFailure: receiveError,
			label: 'GET_FAVORITED_USER_ARTICLES',
			token,
		})
	);
};

export const addArticle = (title: string, token: string, description?: string, body?: string, tagList?: string[]) => (
	dispatch: ThunkDispatch<{}, {}, any>
) => {
	const slug = `${title}+${Math.random().toString(36).substring(2, 15)}`;
	const req = { article: { slug, title, description, body, tagList: [...tagList!] } };
	dispatch(request());
	return dispatch(
		apiAction({
			url: '/articles',
			method: 'POST',
			onSuccess: add,
			onFailure: receiveError,
			label: 'ADD_ARTICLE',
			token,
			data: JSON.stringify(req),
		})
	);
};
