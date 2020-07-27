import * as consts from '../../../constans';
import * as types from '../../../types';
import { ThunkDispatch } from 'redux-thunk';

export type UserActions = types.RequestUser | types.ReceiveUser | types.FetchErrorUser;

export const request = (): types.RequestUser => ({
	type: consts.REQUEST_USER,
});

export const receive = (user: types.User): types.ReceiveUser => ({
	type: consts.RECEIVE_USER,
	payload: {
		loading: false,
		user,
	},
});

export const receiveError = (error: any): types.FetchErrorUser => ({
	type: consts.RECEIVE_ERROR_USER,
	payload: {
		loading: false,
		error,
	},
});

export const loginWithToken = (token: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	dispatch(request());

	return fetch('http://localhost:3000/api/user', {
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => response.json())
		.then((json) => {
			localStorage.setItem('token', json.user.token);
			dispatch(receive(json.user));
			return json;
		})
		.catch((error) => dispatch(receiveError(error)));
};

export const login = (email: string, password: string) => (dispatch: ThunkDispatch<{}, {}, any>) => {
	let req = { user: { email, password } };

	dispatch(request());

	return fetch('http://localhost:3000/api/users/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(req),
	})
		.then((response) => response.json())
		.then((json) => {
			localStorage.setItem('token', json.user.token);
			dispatch(receive(json.user));
			return json;
		})
		.catch((error) => dispatch(receiveError(error)));
};

export const register = (username: string, email: string, password: string) => (
	dispatch: ThunkDispatch<{}, {}, any>
) => {
	dispatch(request());
	let req = { user: { username, email, password } };

	return fetch('http://localhost:3000/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(req),
	})
		.then((response) => response.json())
		.then((json) => {
			localStorage.setItem('token', json.user.token);
			dispatch(receive(json.user));
			return json;
		})
		.catch((error) => dispatch(receiveError(error)));
};
