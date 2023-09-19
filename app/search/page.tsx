"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSearch } from "@/services";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
import MovieCard from "@/components/MovieCard";
import ErrorMessage from "@/components/ErrorMessage";
import stylesPage from "@/components/StylesPageWrapper/StylesPageWrapper.module.scss";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ["search", searchParams.get("query"), currentPage],
    queryFn: () => getSearch(searchParams.get("query"), currentPage),
  });

  if (error) return <ErrorMessage />;

  return (
    <div className={stylesPage.wrapper}>
      <h2>Search</h2>
      <Loading isLoading={isLoading}>
        {!data?.results.length && (
          <p className={stylesPage.textBlock}>No movies found</p>
        )}
        <div className={stylesPage.grid}>
          {data?.results.map((movie: any) => (
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
          totalPages={data?.total_pages}
          onPreviousPage={() => setCurrentPage(currentPage - 1)}
          onNextPage={() => setCurrentPage(currentPage + 1)}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
        />
      </Loading>
    </div>
  );
};

export default SearchPage;
