const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = (endpoint, data, method = 'GET') => {
	// endpoint = auth, operations...
	const url = `${baseUrl}/${endpoint}`;
	if (method === 'GET') return fetch(url);

	const options = {
		method,
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	};

	return fetch(url, options);
};

export const fetchWithToken = (endpoint, data, method = 'GET') => {
	// endpoint = auth, operations...
	const url = `${baseUrl}/${endpoint}`;
	const token = localStorage.getItem('x-token') || '';

	if (method === 'GET') {
		const options = {
			method,
			headers: {
				'x-token': token,
			},
		};
		return fetch(url, options);
	}

	const options = {
		method,
		headers: {
			'Content-type': 'application/json',
			'x-token': token,
		},
		body: JSON.stringify(data),
	};

	return fetch(url, options);
};
