import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList/MoviesList';
import './App.scss';
import { Movie } from 'interfaces';
import AddMovie from 'components/AddMovie/AddMovie';

// const BASE_URL = 'https://swapi.dev/api';
// const FILMS_URL = `${BASE_URL}/films`;
const BASE_URL =
  'https://react-sw-api-fb42a-default-rtdb.europe-west1.firebasedatabase.app/';
const FILMS_URL = `${BASE_URL}/movies.json`;

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

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }

    setIsLoading(false);
  }, []);

  async function addMovieHandler(movie: Movie) {
    const response = await fetch(FILMS_URL, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    console.log(data);
  }

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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
