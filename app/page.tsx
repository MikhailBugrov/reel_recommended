"use client";

import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/services";
import MovieSwiper from "@/components/MovieSwiper";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import styles from "@/components/StylesPageWrapper/styles.module.scss";

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
    <div className={styles.pageWrapper}>
      <h2>Popular Movies</h2>
      <Loading isLoading={isLoading}>
        <MovieSwiper movies={movies?.results} />
      </Loading>
    </div>
  );
};

export default Home;
