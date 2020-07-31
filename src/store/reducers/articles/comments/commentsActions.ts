import * as consts from '../../../../constans';
import * as types from '../../../../types';

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

export const receive = (articleSlug: string) => (comments: any): types.ReceiveArticlesComments => ({
	type: consts.RECEIVE_ARTICLES_COMMENTS,
	payload: {
		articleSlug,
		loading: false,
		comments: comments.comments,
	},
});

export const add = (articleSlug: string) => (comment: any): types.AddArticlesComments => ({
	type: consts.ADD_ARTICLES_COMMENT,
	payload: {
		articleSlug,
		loading: false,
		comments: comment.comment,
	},
});

export const remove = (articleSlug: string, commentId: string) => (comment: any): types.RemoveArticlesComments => ({
	type: consts.REMOVE_ARTICLES_COMMENT,
	payload: {
		articleSlug,
		commentId,
		loading: false,
	},
});

export const receiveError = (articleSlug: string) => (error: any): types.FetchErrorArticlesComments => ({
	type: consts.RECEIVE_ERROR_ARTICLES_COMMENTS,
	payload: {
		articleSlug,
		loading: false,
		error,
	},
});
