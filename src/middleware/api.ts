import { apiStart, apiError, apiEnd } from './apiActions';

const apiMiddleware = ({ dispatch }: any) => (next: Function) => (action: any) => {
	next(action);
	if (action.type !== 'API') return;

	const { url, method, data, token, onSuccess, onFailure, label, headers } = action.payload;

	const baseUrl = process.env.REACT_APP_BASEURL;
	let fetchHeaders = { ...headers, 'Content-type': 'application/json;charset=utf-8' };
	fetchHeaders = !!token ? { ...fetchHeaders, Authorization: `Bearer ${token}` } : fetchHeaders;

	if (label) {
		dispatch(apiStart(label));
	}
	console.log(onSuccess, onFailure);

	fetch(`${baseUrl}${url}`, { method: method, headers: fetchHeaders, body: data })
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			if (!data.errors) {
				dispatch(onSuccess(data));
			} else dispatch(onFailure(data.errors));
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
