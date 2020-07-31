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
	console.log(onSuccess, onFailer);

	fetch(`${baseUrl}${url}`, { method: method, headers: fetchHeaders, body: data })
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			if (!data.errors) {
				dispatch(onSuccess(data));
			} else dispatch(onFailer(data.errors));
		})
		.catch((error) => {
			dispatch(apiError(error));
		})
		.finally(() => {
			if (label) {
				dispatch(apiEnd(label));
			}
		});
};

export default apiMiddleware;
