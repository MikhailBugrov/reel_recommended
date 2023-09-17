import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const API_KEY = process.env.API_KEY;
  const id = params.id;

  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const actorResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );

  const movieData = await movieResponse.json();
  const actorData = await actorResponse.json();

  const response = {
    movie: movieData,
    actor: actorData,
  };

  return NextResponse.json(response);
}
