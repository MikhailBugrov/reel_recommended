import Image from "next/image";
import { posterImgUrl, backdropImgUrl } from "@/utils/posterImgUrl";
import detailedStyles from "./detailedStyles.module.scss";

const DetailedMovie = ({ movie }: any) => {
  return (
    <div className={detailedStyles.movieDetails}>
      <div>
        <Image
          className={detailedStyles.backdrop}
          src={backdropImgUrl(movie.backdrop_path || movie.poster_path)}
          layout="fill"
          objectFit="cover"
          alt={movie.backdrop_path}
        />
        <Image
          className={detailedStyles.posterWrapper}
          src={posterImgUrl(movie.poster_path)}
          width={300}
          height={450}
          alt={movie.title}
        />
      </div>
      <div className={detailedStyles.movieInfo}>
        <p className={detailedStyles.overview}>{movie.overview}</p>
        <p>
          <strong>Release Date: </strong> {movie.release_date}
        </p>
        <p>
          <strong>Runtime: </strong> {movie.runtime} minutes
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre: any) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Production Companies: </strong>
          {movie.production_companies
            .map((company: any) => company.name)
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
  );
};

export default DetailedMovie;
