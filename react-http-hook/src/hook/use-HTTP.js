import { useState } from 'react';

const useHTTP = (httpConfig, applyData) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = async (taskText) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(
				httpConfig.url,
				{
					method: httpConfig.method ? httpConfig.method : 'GET',
					body: httpConfig.body ? JSON.stringify(httpConfig.body) : null,
					headers: httpConfig.headers ? httpConfig.headers : {},
				}
			);

			if (!response.ok) {
				throw new Error('Request failed!');
				console.log(response.message);
			}

			const data = await response.json();

			applyData(data);

		} catch (err) {
			setError(err.message || 'Something went wrong!');
		}
		setIsLoading(false);
	};

	return {
		isLoading: isLoading,
		error: error,
		sendRequest: sendRequest
	}
}

export default useHTTP;