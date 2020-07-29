import * as consts from '../../../constans';
import * as types from '../../../types';
import { ThunkDispatch } from 'redux-thunk';
import { apiAction } from '../../../middleware/apiActions';

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
			onFailure: receiveError,
			label: 'GET_ARTICLES_FEED',
			token,
		})
	);
};

export const getArticles = () => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: '/articles',
			onSuccess: receive,
			onFailure: receiveError,
			label: 'GET_ARTICLES',
		})
	);
};
