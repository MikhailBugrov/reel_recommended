import { useQuery } from "@tanstack/react-query";
import { getMovieId } from "@/services";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import MovieCard from "@/components/MovieCard";

interface MovieCardFavouritesProps {
  id: string;
}

const MovieCardFavourites = ({ id }: MovieCardFavouritesProps) => {
  const { data, error, isFetching } = useQuery(["favourites", id], () =>
    getMovieId(id)
  );

  if (error) return <ErrorMessage />;

  return (
    <Loading isLoading={isFetching}>
      <MovieCard
        id={data?.movie.id}
        title={data?.movie.title}
        releaseDate={data?.movie.release_date}
        rating={data?.movie.vote_average}
        posterUrl={data?.movie.poster_path}
      />
    </Loading>
  );
};

export default MovieCardFavourites;
