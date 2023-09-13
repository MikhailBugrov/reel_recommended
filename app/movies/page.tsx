"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/services";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import { imageUrl } from "@/utils/constants";
import Link from "next/link";

const AllMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: movies,
    error,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["movies", currentPage],
    queryFn: () => getMovies(currentPage),
  });
  console.log(movies);

  if (error) return <div>Error loading movies</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>All Movies</h1>

      <div>
        <ul>
          {movies?.results.map((movie: any) => (
            <li key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                {movie.title}
                <Image
                  src={`${imageUrl}${movie.poster_path}`}
                  width={200}
                  height={300}
                  alt={movie.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={movies?.total_pages}
        onPreviousPage={() => setCurrentPage(currentPage - 1)}
        onNextPage={() => setCurrentPage(currentPage + 1)}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </div>
  );
};

export default AllMovies;
