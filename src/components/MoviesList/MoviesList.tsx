import React from 'react';

import Movie from '../Movie/Movie';
import classes from './MoviesList.module.scss';
import { MoviesListProps } from './MoviesListProps';

const MovieList = ({ movies }: MoviesListProps) => {
  return (
    <ul className={classes['movies-list']}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          id={movie.id}
        />
      ))}
    </ul>
  );
};

export default MovieList;
