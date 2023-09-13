"use client";

import { useQuery } from "@tanstack/react-query";
import { getMovieId } from "@/services";
import Image from "next/image";
import { imageUrl } from "@/utils/constants";

type Props = {
  params: {
    id: string;
  };
};

const Detailed = ({ params: { id } }: Props) => {
  const { data: movie } = useQuery({
    queryKey: ["movie"],
    queryFn: () => getMovieId(id),
  });

  console.log(movie);

  return (
    <div>
      -----------
      <h1>Detailed {movie?.title}</h1>
      <Image
        src={`${imageUrl}${movie?.poster_path}`}
        width={200}
        height={300}
        alt={movie?.title}
      />
      -----------
    </div>
  );
};

export default Detailed;

// import { Metadata } from "next";
// export async function generateMetadata({
//   params: { id },
// }: Props): Promise<Metadata> {
//   const movieData = await getMovieId(id);
//   return {
//     title: movieData.movie?.title,
//   };
// }
