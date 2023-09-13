export async function getMovies(page: number) {
  const response = await fetch(`/api/movies?page=${page}`);
  if (!response.ok) {
    throw new Error("Unable to fetch movies.");
  }
  const data = await response.json();
  return data;
}

export async function getMovieId(id: string) {
  const response = await fetch(`/api/movies/${id}`);
  if (!response.ok) {
    throw new Error("Unable to fetch movies.");
  }
  const data = await response.json();
  return data;
}
