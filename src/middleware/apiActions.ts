import { API, API_START, API_END, ACCESS_DENIED, API_ERROR } from '../constans';

export const apiStart = (label: any) => ({
	type: API_START,
	payload: label,
});

export const apiEnd = (label: any) => ({
	type: API_END,
	payload: label,
});

export const accessDenied = (url: string) => ({
	type: ACCESS_DENIED,
	payload: {
		url,
	},
});

export const apiError = (error: any) => ({
	type: API_ERROR,
	error,
});

interface Props {
	url: string;
	method?: string;
	data?: any;
	token?: string | null;
	onSuccess?: Function;
	onSuccessHandler?: Function;
	onFailure?: Function;
	label?: string;
	headersOverride?: any;
}

export function apiAction({
	url = '',
	method = 'GET',
	data = null,
	token = null,
	onSuccess = () => {},
	onFailure = () => {},
	label = '',
	headersOverride = null,
}: Props) {
	return {
		type: API,
		payload: {
			url,
			method,
			data,
			token,
			onSuccess,
			onFailure,
			label,
			headersOverride,
		},
	};
}
