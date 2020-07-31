import * as consts from '../../../constans';
import * as types from '../../../types';

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

export const receive = (articles: any): types.ReceiveArticles => ({
	type: consts.RECEIVE_ARTICLES,
	payload: {
		loading: false,
		articles: articles.articles,
		articlesCount: articles.articlesCount,
	},
});

export const add = (articles: any): types.ReceiveArticles => ({
	type: consts.RECEIVE_ARTICLES,
	payload: {
		loading: false,
		articles: [articles.article],
		articlesCount: 1,
	},
});

export const favorite = (articleSlug: string) => (articles: any): types.AddArticleToFavorite => ({
	type: consts.ADD_ARTICLE_TO_FAVORITE,
	payload: {
		loading: false,
		articles: articles.article,
		articleSlug,
	},
});

export const receiveError = (error: any): types.FetchErrorArticles => ({
	type: consts.RECEIVE_ERROR_ARTICLES,
	payload: {
		loading: false,
		error,
	},
});

export const remove = (): types.DeleteArticle => ({
	type: consts.DELETE_ARTICLE,
	payload: {
		loading: false,
	},
});
