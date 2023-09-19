"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/services";
import Pagination from "@/components/Pagination";
import MovieCard from "@/components/MovieCard";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import stylesPage from "@/components/StylesPageWrapper/StylesPageWrapper.module.scss";
import MovieFilter from "@/components/MovieFilter";

const MoviesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [minVoteAverage, setMinVoteAverage] = useState("");
  const [releaseYear, setReleaseYear] = useState<number | null>(null);
  const [withGenres, setWithGenres] = useState("");

  const {
    data: movies,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["movies", currentPage, minVoteAverage, releaseYear, withGenres],
    queryFn: () =>
      getMovies(currentPage, minVoteAverage, releaseYear, withGenres),
  });

  if (error) return <ErrorMessage />;

  return (
    <div className={stylesPage.wrapper}>
      <h2>All Movies</h2>

      <MovieFilter
        minVoteAverage={minVoteAverage}
        setMinVoteAverage={setMinVoteAverage}
        releaseYear={releaseYear}
        setReleaseYear={setReleaseYear}
        withGenres={withGenres}
        setWithGenres={setWithGenres}
      />

      <Loading isLoading={isLoading}>
        {!movies?.results.length && (
          <p className={stylesPage.textBlock}>No movies found</p>
        )}
        <div className={stylesPage.grid}>
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
      </Loading>
    </div>
  );
};

export default MoviesList;
