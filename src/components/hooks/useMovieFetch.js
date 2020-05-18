import { useEffect, useState, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config';

export const useMoviefetch = (movieId) => {
	const [state, useState] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchData = useCallback(async () => {
		setError(false);
		setLoading(true);

		try {
			const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
			const result = await (await fetch(endpoint)).json();
			console.log(result);
			const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

			const creditsResults = await (await fetch(creditsEndpoint)).json();

			const directors = creditsResult.crew.filter(
				(member) => member.job === 'Director'
			);

			console.log(creditsResult);
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	}, [movieId]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);
	return [state, loading, error];
};
