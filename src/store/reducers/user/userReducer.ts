import * as consts from '../../../constans';
import * as types from '../../../types';
import { UserActions } from './userActions';

const initialState = { email: '', username: '', token: '', loading: false };

const tokenToCookeis = (token: string) => {
	let date = new Date(Date.now() + 86400e3).toUTCString();
	console.log(date);
	document.cookie = `token=${token}; expires=${date}`;
};

export default (state: types.User = initialState, action: UserActions): types.User | any => {
	switch (action.type) {
		case consts.REQUEST_USER:
			return { ...state, loading: true };
		case consts.RECEIVE_USER:
			tokenToCookeis(action.payload.user.token);
			const { username, email, token } = action.payload.user;
			return { ...state, loading: false, username, email, token };
		case consts.RECEIVE_ERROR_USER:
			return { ...state, loading: false, error: action.payload.error };
		default:
			return state;
	}
};
