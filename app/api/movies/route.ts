import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const API_KEY = process.env.API_KEY;
  const page = req.nextUrl.searchParams.get("page");
  const minVoteAverage = req.nextUrl.searchParams.get("min_vote_average");
  const releaseYear = req.nextUrl.searchParams.get("release_year");
  const withGenres = req.nextUrl.searchParams.get("with_genres");

  let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}`;

  if (minVoteAverage) {
    apiUrl += `&vote_average.gte=${minVoteAverage}`;
  }

  if (releaseYear) {
    apiUrl += `&primary_release_year=${releaseYear}`;
  }

  if (withGenres) {
    apiUrl += `&with_genres=${withGenres}`;
  }

  const movies = await fetch(apiUrl).then((res) => res.json());

  return NextResponse.json(movies);
}
