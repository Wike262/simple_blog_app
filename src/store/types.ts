import * as constants from '../constants';
import * as types from '../types';

export interface RequestUser {
	type: constants.REQUEST_USER;
}

export interface ReceiveUser {
	type: constants.RECEIVE_USER;
	payload: {
		loading: boolean;
		user: types.User;
	};
}

export interface FetchErrorUser {
	type: constants.RECEIVE_ERROR_USER;
	payload: {
		loading: boolean;
		error: any;
	};
}

export interface RequestArticles {
	type: constants.REQUEST_ARTICLES;
}

export interface ReceiveArticles {
	type: constants.RECEIVE_ARTICLES;
	payload: {
		loading: boolean;
		articles: Array<types.Article>;
		articlesCount: number;
	};
}

export interface DeleteArticle {
	type: constants.DELETE_ARTICLE;
	payload: {
		loading: boolean;
	};
}

export interface AddArticleToFavorite {
	type: constants.ADD_ARTICLE_TO_FAVORITE;
	payload: {
		loading: boolean;
		articles: types.Article;
		articleSlug: string;
	};
}

export interface RemoveArticleFroFavorite {
	type: constants.REMOVE_ARTICLE_FROM_FAVORITE;
	payload: {
		loading: boolean;
		articles: types.Article;
		articleSlug: string;
	};
}

export interface AddArticles {
	type: constants.RECEIVE_ARTICLES;
	payload: {
		loading: boolean;
		articles: Array<types.Article>;
	};
}

export interface FetchErrorArticles {
	type: constants.RECEIVE_ERROR_ARTICLES;
	payload: {
		loading: boolean;
		error: any;
	};
}

export interface RequestArticlesComments {
	type: constants.REQUEST_ARTICLES_COMMENTS;
	payload: { articleSlug: string };
}

export interface ReceiveArticlesComments {
	type: constants.RECEIVE_ARTICLES_COMMENTS;
	payload: {
		articleSlug: string;
		loading: boolean;
		comments: Array<Comment>;
	};
}

export interface FetchErrorArticlesComments {
	type: constants.RECEIVE_ERROR_ARTICLES_COMMENTS;
	payload: {
		articleSlug: string;
		loading: boolean;
		error: any;
	};
}

export interface AddArticlesComments {
	type: constants.ADD_ARTICLES_COMMENT;
	payload: {
		articleSlug: string;
		loading: boolean;
		comments: any;
	};
}

export interface RemoveArticlesComments {
	type: constants.REMOVE_ARTICLES_COMMENT;
	payload: {
		articleSlug: string;
		commentId: string;
		loading: boolean;
	};
}

export interface SetFavoriteArticles {
	type: constants.SET_FAVORITE_ARTICLES;
	payload: {
		favorite: Array<types.Article>;
	};
}

export interface FollowUser {
	type: constants.FOLLOW_USER;
	payload: {
		user: types.User;
	};
}
