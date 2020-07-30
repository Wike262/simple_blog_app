import { apiStart, apiError, apiEnd } from './apiActions';

interface Props {
	path: string;
	data: any;
	token?: string;
}

const apiMiddleware = ({ dispatch }: any) => (next: Function) => (action: any) => {
	next(action);
	if (action.type !== 'API') return;

	const { url, method, data, token, onSuccess, onFailer, label, headers } = action.payload;

	const baseUrl = 'http://localhost:3000/api';
	let fetchHeaders = { ...headers, 'Content-type': 'application/json;charset=utf-8' };
	fetchHeaders = !!token ? { ...fetchHeaders, Authorization: `Bearer ${token}` } : fetchHeaders;

	if (label) {
		dispatch(apiStart(label));
	}

	fetch(`${baseUrl}${url}`, { method: method, headers: fetchHeaders, body: data })
		.then((response) => {
			if (response.statusText === 'OK') {
				return response.json();
			} else return response;
		})
		.then((data) => {
			dispatch(onSuccess(data));
		})
		.catch((error) => {
			dispatch(apiError(error));
			dispatch(onFailer(error));
		})
		.finally(() => {
			if (label) {
				dispatch(apiEnd(label));
			}
		});
};

export default apiMiddleware;
