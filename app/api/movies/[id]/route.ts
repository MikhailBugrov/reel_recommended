import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const API_KEY = process.env.API_KEY;
  const id = params.id;

  const movies = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  ).then((res) => res.json());
  return NextResponse.json(movies);
}
