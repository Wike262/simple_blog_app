import * as consts from '../../../constans';
import * as types from '../../../types';
import { UserActions } from './articlesActions';

const initialState = { email: '', username: '', token: '', loading: false };

export default (state: types.User = initialState, action: UserActions): types.User | any => {
	switch (action.type) {
		case consts.REQUEST_USER:
			return { ...state, loading: true };
		case consts.RECEIVE_USER:
			let { username, email, token } = action.payload.user;
			return { ...state, loading: false, username, email, token };
		case consts.RECEIVE_ERROR_USER:
			return { ...state, loading: false, error: action.payload.error };
		default:
			return state;
	}
};
