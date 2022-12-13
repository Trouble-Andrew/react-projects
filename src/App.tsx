import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList/MoviesList';
import './App.scss';
import { Movie, MovieFromJSON } from 'interfaces';

const BASE_URL = 'https://swapi.dev/api';
const FILMS_URL = `${BASE_URL}/films`;

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(FILMS_URL);

      if (!response.ok) {
        throw new Error(`Something went wrong!`);
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData: MovieFromJSON) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
