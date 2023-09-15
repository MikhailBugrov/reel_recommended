import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const API_KEY = process.env.API_KEY;
  const page = req.nextUrl.searchParams.get("page");
  const query = req.nextUrl.searchParams.get("query");

  const movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=popularity.desc&query=${query}&page=${page}`
  ).then((res) => res.json());

  return NextResponse.json(movies);
}
