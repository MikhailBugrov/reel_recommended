export async function getMovies(
  page: number = 1,
  minVoteAverage?: string,
  releaseYear?: number | null,
  withGenres?: string
) {
  const params = new URLSearchParams({
    page: String(page),
    min_vote_average: minVoteAverage || "",
    release_year: releaseYear ? String(releaseYear) : "",
    with_genres: withGenres || "",
  });

  const apiUrl = `/api/movies?${params}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Unable to fetch movies.");
  }

  return response.json();
}

export async function getMovieId(id: string) {
  const response = await fetch(`/api/movies/${id}`);
  if (!response.ok) {
    throw new Error("Unable to fetch movies.");
  }
  const data = await response.json();
  return data;
}

export async function getSearch(query: string | null, page: number = 1) {
  const response = await fetch(`/api/search?query=${query}&page=${page}`);
  if (!response.ok) {
    throw new Error("Unable to fetch movies.");
  }
  const data = await response.json();
  return data;
}
