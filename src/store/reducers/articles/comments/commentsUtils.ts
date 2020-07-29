import { updateItemInArray, updateObject } from '../../utils';
import * as types from '../../../../types';

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

export function addComment(state: State, action: types.AddArticlesComments) {
	const newArticles = updateItemInArray(state.articles, action.payload.articleSlug, (article: types.Article) => {
		return { ...article, comments: { comments: [action.payload.comments].concat(article.comments.comments) } };
	});
	return { ...state, articles: newArticles };
}

export function removeComment(state: State, action: types.RemoveArticlesComments) {
	const newArticles = updateItemInArray(state.articles, action.payload.articleSlug, (article: types.Article) => {
		return {
			...article,
			comments: { comments: article.comments.comments.filter((item: any) => item.id !== action.payload.commentId) },
		};
	});
	return { ...state, articles: newArticles };
}
