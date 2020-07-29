import * as consts from '../../../../constans';
import * as types from '../../../../types';
import { ThunkDispatch } from 'redux-thunk';
import { apiAction } from '../../../../middleware/apiActions';

export type CommentsActions =
	| types.RequestArticlesComments
	| types.ReceiveArticlesComments
	| types.FetchErrorArticlesComments
	| types.AddArticlesComments
	| types.RemoveArticlesComments;

export const request = (articleSlug: string) => (): types.RequestArticlesComments => ({
	type: consts.REQUEST_ARTICLES_COMMENTS,
	payload: {
		articleSlug,
	},
});

export const receive = (articleSlug: string) => (comments: any): types.ReceiveArticlesComments => {
	return {
		type: consts.RECEIVE_ARTICLES_COMMENTS,
		payload: {
			articleSlug,
			loading: false,
			comments: comments.comments,
		},
	};
};

export const add = (articleSlug: string) => (comment: any): types.AddArticlesComments => {
	return {
		type: consts.ADD_ARTICLES_COMMENT,
		payload: {
			articleSlug,
			loading: false,
			comments: comment.comment,
		},
	};
};

export const remove = (articleSlug: string, commentId: string) => (comment: any): types.RemoveArticlesComments => {
	return {
		type: consts.REMOVE_ARTICLES_COMMENT,
		payload: {
			articleSlug,
			commentId,
			loading: false,
		},
	};
};

export const receiveError = (articleSlug: string) => (error: any): types.FetchErrorArticlesComments => ({
	type: consts.RECEIVE_ERROR_ARTICLES_COMMENTS,
	payload: {
		articleSlug,
		loading: false,
		error,
	},
});

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
