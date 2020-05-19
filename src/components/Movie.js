import React from 'react';
import useMovieFetch from './hooks/useMovieFetch';
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Grid from './elements/Grid';
import Actor from './elements/Actor';
import Spinner from './elements/Spinner';

const Movie = ({ movieId }) => {
	const [movie, loading, error] = useMovieFetch(movieId);

	if (error) {
		return <div>Something Went Wrong...</div>;
	}
	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<Navigation movie={movie.original_title} />
			<MovieInfo />
			<MovieInfoBar />
			<Grid>
				<Actor />
			</Grid>
		</>
	);
};
export default Movie;
