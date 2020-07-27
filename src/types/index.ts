import * as consts from '../constans';

export interface User {
	username: string;
	email: string;
	token: string;
	loading: boolean;
}

export interface StoreState {
	user: User;
}

export interface RequestUser {
	type: consts.REQUEST_USER;
}

export interface ReceiveUser {
	type: consts.RECEIVE_USER;
	payload: {
		loading: boolean;
		user: User;
	};
}

export interface FetchErrorUser {
	type: consts.RECEIVE_ERROR_USER;
	payload: {
		loading: boolean;
		error: any;
	};
}
