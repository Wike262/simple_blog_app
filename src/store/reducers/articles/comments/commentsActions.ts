import * as constants from '../../../../constants';
import * as actionTypes from '../../../types';

export type CommentsActions =
	| actionTypes.RequestArticlesComments
	| actionTypes.ReceiveArticlesComments
	| actionTypes.FetchErrorArticlesComments
	| actionTypes.AddArticlesComments
	| actionTypes.RemoveArticlesComments;

export const request = (articleSlug: string) => (): actionTypes.RequestArticlesComments => ({
	type: constants.REQUEST_ARTICLES_COMMENTS,
	payload: {
		articleSlug,
	},
});

export const receive = (articleSlug: string) => (comments: any): actionTypes.ReceiveArticlesComments => ({
	type: constants.RECEIVE_ARTICLES_COMMENTS,
	payload: {
		articleSlug,
		loading: false,
		comments: comments.comments,
	},
});

export const add = (articleSlug: string) => (comment: any): actionTypes.AddArticlesComments => ({
	type: constants.ADD_ARTICLES_COMMENT,
	payload: {
		articleSlug,
		loading: false,
		comments: comment.comment,
	},
});

export const remove = (articleSlug: string, commentId: string) => (
	comment: any
): actionTypes.RemoveArticlesComments => ({
	type: constants.REMOVE_ARTICLES_COMMENT,
	payload: {
		articleSlug,
		commentId,
		loading: false,
	},
});

export const receiveError = (articleSlug: string) => (error: any): actionTypes.FetchErrorArticlesComments => ({
	type: constants.RECEIVE_ERROR_ARTICLES_COMMENTS,
	payload: {
		articleSlug,
		loading: false,
		error,
	},
});
