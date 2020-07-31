import * as types from '../../../types';
import { ThunkDispatch } from 'redux-thunk';
import { apiAction } from '../../../middleware/apiActions';
import { setFavoriteArticles } from '../user/userActions';
import { request, receive, receiveError, remove, add } from './articlesActions';

export const getArticlesFeed = (token: string, page?: number) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: `/articles/feed?offset=${page}`,
			onSuccess: receive,
			onSuccessHandler: setFavoriteArticles,
			onFailure: receiveError,
			label: 'GET_ARTICLES_FEED',
			token,
		})
	);
};

export const getArticles = (token?: string, page?: number) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: `/articles?offset=${page}`,
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

export const addArticle = (article: types.Article, token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	const slug = `${article.title}+${Math.random().toString(36).substring(2, 15)}`;
	const req = { article: { ...article, slug } };
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

export const getArticlesByTag = (tag: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: `/articles?tag=${tag}`,
			method: 'GET',
			onSuccess: receive,
			onFailure: receiveError,
			label: 'ARTICLES_BY_TAG',
		})
	);
};

export const deleteArticle = (articleSlug: string, token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: `/articles/${articleSlug}`,
			method: 'DELETE',
			onSuccess: remove,
			onFailure: receiveError,
			token,
			label: 'DELETE_ATTICLE',
		})
	);
};

export const updateArticle = (article: types.Article, token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	const req = { article };
	return dispatch(
		apiAction({
			url: `/articles/${article.slug}`,
			method: 'PUT',
			onSuccess: add,
			onFailure: receiveError,
			token,
			label: 'UPDATE_ARTICLE',
			data: JSON.stringify(req),
		})
	);
};
