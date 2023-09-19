import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "@/redux/features/favorites";
import { RootState } from "@/redux/store";
import { isMovieFavorite } from "@/redux/features/favorites/selector";
import BookmarkIcon from "@/components/BookmarkIcon";
import { posterImgUrl, backdropImgUrl } from "@/utils/posterImgUrl";
import stylesDetailed from "./DetailedMovie.module.scss";
import MovieTypes from "./types";

interface DetailedMovieProps {
  movie: MovieTypes;
}

const DetailedMovie: React.FC<DetailedMovieProps> = ({ movie }) => {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state: RootState) =>
    isMovieFavorite(state, movie.id)
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeMovie(movie.id));
    } else {
      dispatch(addMovie(movie.id));
    }
  };
  return (
    <>
      <div className={stylesDetailed.wrapper}>
        <div className={stylesDetailed.iconsPosition}>
          <BookmarkIcon
            isFavorite={isFavorite}
            onClick={handleToggleFavorite}
          />
        </div>

        <Image
          className={stylesDetailed.backdrop}
          src={backdropImgUrl(movie.backdrop_path || movie.poster_path)}
          width={1000}
          height={450}
          alt={movie.backdrop_path}
          priority
        />

        <Image
          className={stylesDetailed.posterWrapper}
          src={posterImgUrl(movie.poster_path)}
          width={300}
          height={450}
          alt={movie.title}
        />

        <div className={stylesDetailed.info}>
          <p className={stylesDetailed.overview}>{movie.overview}</p>
          <p>
            <strong>Release Date: </strong> {movie.release_date}
          </p>
          <p>
            <strong>Runtime: </strong> {movie.runtime} minutes
          </p>
          <p>
            <strong>Genres: </strong>
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Production Companies: </strong>
            {movie.production_companies
              .map((company) => company.name)
              .join(", ")}
          </p>
          <p>
            <strong>Homepage: </strong>
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
              {movie.homepage}
            </a>
          </p>
          <p>
            <strong>Popularity: </strong> {movie.popularity}
          </p>
          <p>
            <strong>Original Language: </strong> {movie.original_language}
          </p>
          <p>
            <strong>IMDb ID: </strong> {movie.imdb_id}
          </p>
          <p>
            <strong>Tagline: </strong> {movie.tagline}
          </p>
          <p>
            <strong>Vote Average: </strong> {movie.vote_average}
          </p>
          <p>
            <strong>Vote Count: </strong> {movie.vote_count}
          </p>
          <p>
            <strong>Production Countries: </strong>
            {movie.production_countries
              .map((country: any) => country.name)
              .join(", ")}
          </p>
          <p>
            <strong>Adult:</strong> {movie.adult ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailedMovie;
