import React from 'react';
import { Movie as MovieInterface } from 'interfaces';

import classes from './Movie.module.scss';

const Movie = ({ title, releaseDate, openingText }: MovieInterface) => {
  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};

export default Movie;
