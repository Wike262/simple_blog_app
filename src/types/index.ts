import * as consts from '../constans';
import { Tracing } from 'trace_events';

export interface User {
	username: string;
	email: string;
	token: string;
	loading: boolean;
	image?: string;
	bio?: string;
	favorites?: Array<Article>;
}

export interface Article {
	slug: string;
	title?: string;
	description?: string;
	updatedAt: Date;
	tagList: [];
	favorited: boolean;
	comments: { loading: false; comments: any };
	favoritesCount: number;
	author: { username: string; image: string; following: boolean };
}

export interface Comment {
	message: string;
	author: User;
	createdAt: Date;
}
export interface ArticlesState {
	articles: Array<Article>;
	loading: false;
}

export interface StoreState {
	user: User;
	articles: ArticlesState;
}

export interface RequestUser {
	type: consts.REQUEST_USER;
}

export interface ReceiveUser {
	type: consts.RECEIVE_USER;
	payload: {
		loading: boolean;
		user: User;
	};
}

export interface FetchErrorUser {
	type: consts.RECEIVE_ERROR_USER;
	payload: {
		loading: boolean;
		error: any;
	};
}

export interface RequestArticles {
	type: consts.REQUEST_ARTICLES;
}

export interface ReceiveArticles {
	type: consts.RECEIVE_ARTICLES;
	payload: {
		loading: boolean;
		articles: Array<Article>;
	};
}

export interface AddArticleToFavorite {
	type: consts.ADD_ARTICLE_TO_FAVORITE;
	payload: {
		loading: boolean;
		articles: Article;
		articleSlug: string;
	};
}

export interface RemoveArticleFroFavorite {
	type: consts.REMOVE_ARTICLE_FROM_FAVORITE;
	payload: {
		loading: boolean;
		articles: Article;
		articleSlug: string;
	};
}

export interface AddArticles {
	type: consts.RECEIVE_ARTICLES;
	payload: {
		loading: boolean;
		articles: Array<Article>;
	};
}

export interface FetchErrorArticles {
	type: consts.RECEIVE_ERROR_ARTICLES;
	payload: {
		loading: boolean;
		error: any;
	};
}

export interface RequestArticlesComments {
	type: consts.REQUEST_ARTICLES_COMMENTS;
	payload: { articleSlug: string };
}

export interface ReceiveArticlesComments {
	type: consts.RECEIVE_ARTICLES_COMMENTS;
	payload: {
		articleSlug: string;
		loading: boolean;
		comments: Array<Comment>;
	};
}

export interface FetchErrorArticlesComments {
	type: consts.RECEIVE_ERROR_ARTICLES_COMMENTS;
	payload: {
		articleSlug: string;
		loading: boolean;
		error: any;
	};
}

export interface AddArticlesComments {
	type: consts.ADD_ARTICLES_COMMENT;
	payload: {
		articleSlug: string;
		loading: boolean;
		comments: any;
	};
}

export interface RemoveArticlesComments {
	type: consts.REMOVE_ARTICLES_COMMENT;
	payload: {
		articleSlug: string;
		commentId: string;
		loading: boolean;
	};
}

export interface SetFavoriteArticles {
	type: consts.SET_FAVORITE_ARTICLES;
	payload: {
		favorite: Array<Article>;
	};
}
