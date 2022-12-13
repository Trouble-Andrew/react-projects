import { Movie } from "interfaces";

export interface AddMovieProps {
  onAddMovie: (movie: Movie) => void;
}