import * as constants from '../../../../constants';
import * as types from '../../../../types';
import { CommentsActions } from './commentsActions';
import { requestComments, receiveComments, fetchErrorComments, addComments, removeComment } from './commentsUtils';

const initialState = { articles: [], loading: false };

interface State {
	articles: Array<types.Article>;
	loading: boolean;
}

export default (state: State = initialState, action: CommentsActions) => {
	switch (action.type) {
		case constants.REQUEST_ARTICLES_COMMENTS:
			return requestComments(state, action);
		case constants.RECEIVE_ARTICLES_COMMENTS:
			return receiveComments(state, action);
		case constants.RECEIVE_ERROR_ARTICLES_COMMENTS:
			return fetchErrorComments(state, action);
		case constants.ADD_ARTICLES_COMMENT:
			return addComments(state, action);
		case constants.REMOVE_ARTICLES_COMMENT:
			return removeComment(state, action);
		default:
			return state;
	}
};
