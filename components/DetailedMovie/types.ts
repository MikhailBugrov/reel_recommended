interface MovieTypes {
  id: string;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  runtime: number;
  genres: { name: string }[];
  production_companies: { name: string }[];
  homepage: string;
  popularity: number;
  original_language: string;
  imdb_id: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  production_countries: { name: string }[];
  adult: boolean;
}

export default MovieTypes;
