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
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	}, [movieId]);
};
