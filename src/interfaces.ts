export interface Movie {
  id: number;
  title: string;
  openingText: string;
  releaseDate: string;
}

export interface MovieFromJSON extends Movie {
  episode_id: Movie['id'];
  opening_crawl: Movie['openingText'];
  release_date: Movie['releaseDate'];
}
