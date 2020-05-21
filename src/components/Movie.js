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

	console.log(movie);
	return (
		<>
			<Navigation movie={movie.original_title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar
				time={movie.runtime}
				budget={movie.budget}
				revenue={movie.revenue}
			/>
			<Grid header='Actors'>
				{movie.actors.map((actor) => (
					<Actor key={actor.credit_id} actor={actor} />
				))}
			</Grid>
		</>
	);
};
export default Movie;
