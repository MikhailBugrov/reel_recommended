"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/services";
import Pagination from "@/components/Pagination";
import MovieCard from "@/components/MovieCard";
import styles from "@/components/StylesPageWrapper/styles.module.scss";

const MoviesList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: movies,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["movies", currentPage],
    queryFn: () => getMovies(currentPage),
  });

  if (error) return <div>Error loading movies</div>;
  if (isFetching) return <div>Loading...</div>;

  return (
    <div className={styles.pageWrapper}>
      <h2>All Movies</h2>

      <div className={styles.movieGrid}>
        {movies?.results.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
            posterUrl={movie.poster_path}
          />
        ))}
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

export default MoviesList;
