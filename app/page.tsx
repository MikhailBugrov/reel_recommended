"use client";

import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/services";
import PopularMoviesSwiper from "@/components/PopularMoviesSwiper";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import stylesPage from "@/components/StylesPageWrapper/StylesPageWrapper.module.scss";

const Home = () => {
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getMovies(),
  });

  if (error) return <ErrorMessage />;

  return (
    <div className={stylesPage.wrapper}>
      <h2>Popular Movies</h2>
      <Loading isLoading={isLoading}>
        <PopularMoviesSwiper movies={movies?.results} />
      </Loading>
    </div>
  );
};

export default Home;
