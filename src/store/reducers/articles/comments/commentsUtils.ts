import { updateItemInArray, updateObject } from '../../utils';
import * as types from '../../../../types';
import { ThunkDispatch } from 'redux-thunk';
import { apiAction } from '../../../../middleware/apiActions';
import { receive, remove, request, add, receiveError } from './commentsActions';

interface State {
	articles: Array<types.Article>;
	loading: boolean;
}

export function receiveComments(state: State, action: types.ReceiveArticlesComments) {
	const newArticles = updateItemInArray(state.articles, action.payload.articleSlug, (article: types.Article) => {
		return updateObject(article, { comments: { loading: false, comments: action.payload.comments } });
	});
	return { ...state, articles: newArticles };
}

export function requestComments(state: State, action: types.RequestArticlesComments) {
	const newArticles = updateItemInArray(state.articles, action.payload.articleSlug, (article: types.Article) => {
		return updateObject(article, { loading: true });
	});
	return { ...state, articles: newArticles };
}

export function fetchErrorComments(state: State, action: types.FetchErrorArticlesComments) {
	const newArticles = updateItemInArray(state.articles, action.payload.articleSlug, (article: types.Article) => {
		return updateObject(article, { error: action.payload.error });
	});
	return { ...state, articles: newArticles };
}

export function addComments(state: State, action: types.AddArticlesComments) {
	const newArticles = updateItemInArray(state.articles, action.payload.articleSlug, (article: types.Article) => {
		return { ...article, comments: { comments: [action.payload.comments].concat(article.comments.comments) } };
	});
	return { ...state, articles: newArticles };
}

export function removeComment(state: State, action: types.RemoveArticlesComments) {
	const newArticles = updateItemInArray(state.articles, action.payload.articleSlug, (article: types.Article) => {
		return {
			...article,
			comments: {
				comments: article.comments.comments.filter((item: types.Comment) => item.id !== action.payload.commentId),
			},
		};
	});
	return { ...state, articles: newArticles };
}

export const getComments = (articleSlug: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request(articleSlug));
	return dispatch(
		apiAction({
			url: `/articles/${articleSlug}/comments`,
			onSuccess: receive(articleSlug),
			onFailure: receiveError,
			label: 'GET_ARTICLES_FEED',
		})
	);
};

export const deleteComment = (articleSlug: string, commentId: string, token: string) => (
	dispatch: ThunkDispatch<{}, {}, any>
) => {
	dispatch(request(articleSlug));
	return dispatch(
		apiAction({
			url: `/articles/${articleSlug}/comments/${commentId}`,
			method: 'DELETE',
			onSuccess: remove(articleSlug, commentId),
			onFailure: receiveError,
			label: 'DELETE_COMMENT',
			token,
		})
	);
};

export const addComment = (articleSlug: string, message: string, token: string) => (
	dispatch: ThunkDispatch<{}, {}, any>
) => {
	const req = { comment: { body: message } };
	dispatch(request(articleSlug));
	return dispatch(
		apiAction({
			url: `/articles/${articleSlug}/comments`,
			method: 'POST',
			onSuccess: add(articleSlug),
			onFailure: receiveError,
			label: 'ADD_ARTICLE_COMMENT',
			data: JSON.stringify(req),
			token,
		})
	);
};
