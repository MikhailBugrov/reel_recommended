"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSearch } from "@/services";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import MovieCard from "@/components/MovieCard";
import ErrorMessage from "@/components/ErrorMessage";
import stylesPageWrapper from "@/components/StylesPageWrapper/stylesPageWrapper.module.scss";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: movies,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["movies", searchParams.get("query"), currentPage],
    queryFn: () => getSearch(searchParams.get("query"), currentPage),
  });

  if (error) return <ErrorMessage />;

  return (
    <div className={stylesPageWrapper.pageWrapper}>
      <h2>Search</h2>
      <Loading isLoading={isLoading}>
        {!movies?.results.length && (
          <p className={stylesPageWrapper.noMoviesFound}>No movies found</p>
        )}
        <div className={stylesPageWrapper.movieGrid}>
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

export default SearchPage;
