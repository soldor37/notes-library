/* import api from '~/api/api';
import { localStorageToken } from '~/common/lib/proc';

const errorProbability = Math.min(100, parseInt(`0${process.env.SLOW_CONNECTION_PROBABILITY}`, 10)) / 100;

export default function({ $axios }) {
	// $axios.defaults.timeout = process.env.AXIOS_TIMEOUT;

	console.debug(`Plugin: Axios; SSR: ${process.server} injected`);

	// Устанавливаем токен если есть в localStorage
	const token = localStorageToken('accessToken');
	if (token) {
		$axios.setToken(token, 'Bearer');
	}

	$axios.onResponse(() => {
		if (Math.random() < errorProbability) { throw new Error('Имитация разрыва связи'); }
	});

	let isRefreshing = false;
	const refreshSubscribers = [];

	$axios.interceptors.response.use((response) => {
		return response;
	}, (error) => {
		if ($axios.isCancel(error)) { return; }
		// const { config, response: { status } } = error;
		const config = error.config;
		const status = error.response?.status;
		const originalRequest = config;

		if (status === 401 && localStorage.getItem('refreshToken')) {
			if (!isRefreshing) {
				isRefreshing = true;
				api.refreshToken()
					.then(() => {
						isRefreshing = false;
						onRrefreshed(localStorage.getItem('accessToken'));
					}).catch(() => {
						store.commit('authorization/LOGOUT');
					});
			}

			const retryOrigReq = new Promise((resolve) => {
				subscribeTokenRefresh((token) => {
					// replace the expired token and retry
					originalRequest.headers.Authorization = 'Bearer ' + token;
					resolve($axios(originalRequest));
				});
			});
			return retryOrigReq;
		} else {
			return Promise.reject(error);
		}
	});

	function subscribeTokenRefresh(cb) {
		refreshSubscribers.push(cb);
	}

	function onRrefreshed(token) {
		refreshSubscribers.map(cb => cb(token));
	}
}
 */