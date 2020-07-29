import * as consts from '../../../constans';
import * as types from '../../../types';
import { ThunkDispatch } from 'redux-thunk';
import { apiAction } from '../../../middleware/apiActions';

export type UserActions = types.RequestUser | types.ReceiveUser | types.FetchErrorUser;

export const request = (): types.RequestUser => ({
	type: consts.REQUEST_USER,
});

export function receive(user: any) {
	return {
		type: consts.RECEIVE_USER,
		payload: {
			loading: false,
			user: user.user,
		},
	};
}

export const receiveError = (error: any): types.FetchErrorUser => ({
	type: consts.RECEIVE_ERROR_USER,
	payload: {
		loading: false,
		error,
	},
});

export const loginWithToken = (token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());
	return dispatch(
		apiAction({
			url: '/user',
			onSuccess: receive,
			onFailure: receiveError,
			label: 'LOGIN_WITH_TOKEN',
			token,
		})
	);
};

export const login = (email: string, password: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	const req = { user: { email, password } };

	dispatch(request());
	return dispatch(
		apiAction({
			url: '/users/login',
			method: 'POST',
			onSuccess: receive,
			onFailure: receiveError,
			label: 'LOGIN',
			data: JSON.stringify(req),
		})
	);
};

export const register = (username: string, email: string, password: string) => (
	dispatch: ThunkDispatch<{}, {}, any>
) => {
	dispatch(request());
	const req = { user: { username, email, password } };

	return dispatch(
		apiAction({
			url: '/users',
			method: 'POST',
			onSuccess: receive,
			onFailure: receiveError,
			label: 'REGISTER',
			data: JSON.stringify(req),
		})
	);
};

export const updateUser = (user: types.User, token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	const req = { user };

	dispatch(request());
	return dispatch(
		apiAction({
			url: '/user',
			method: 'PUT',
			onSuccess: receive,
			onFailure: receiveError,
			token,
			label: 'UPDATE_USER',
			data: JSON.stringify(req),
		})
	);
};
