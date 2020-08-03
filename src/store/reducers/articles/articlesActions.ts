import * as constants from '../../../constants';
import * as actionTypes from '../../types';

export type ArticlesActions =
	| actionTypes.RequestArticles
	| actionTypes.ReceiveArticles
	| actionTypes.FetchErrorArticles
	| actionTypes.RequestArticlesComments
	| actionTypes.ReceiveArticlesComments
	| actionTypes.FetchErrorArticlesComments
	| actionTypes.AddArticlesComments
	| actionTypes.RemoveArticlesComments;

export const request = (): actionTypes.RequestArticles => ({
	type: constants.REQUEST_ARTICLES,
});

export const receive = (articles: any): actionTypes.ReceiveArticles => ({
	type: constants.RECEIVE_ARTICLES,
	payload: {
		loading: false,
		articles: articles.articles,
		articlesCount: articles.articlesCount,
	},
});

export const add = (articles: any): actionTypes.ReceiveArticles => ({
	type: constants.RECEIVE_ARTICLES,
	payload: {
		loading: false,
		articles: [articles.article],
		articlesCount: 1,
	},
});

export const favorite = (articleSlug: string) => (articles: any): actionTypes.AddArticleToFavorite => ({
	type: constants.ADD_ARTICLE_TO_FAVORITE,
	payload: {
		loading: false,
		articles: articles.article,
		articleSlug,
	},
});

export const receiveError = (error: any): actionTypes.FetchErrorArticles => ({
	type: constants.RECEIVE_ERROR_ARTICLES,
	payload: {
		loading: false,
		error,
	},
});

export const remove = (): actionTypes.DeleteArticle => ({
	type: constants.DELETE_ARTICLE,
	payload: {
		loading: false,
	},
});
