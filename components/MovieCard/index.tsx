import Image from "next/image";
import { posterImgUrl } from "@/utils/posterImgUrl";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "@/redux/features/favorites";
import { RootState } from "@/redux/store";
import { isMovieFavorite } from "@/redux/features/favorites/selector";
import BookmarkIcon from "@/components/BookmarkIcon";
import movieCard from "./movieCard.module.scss";

interface MovieCardProps {
  id: string;
  title: string;
  releaseDate: string;
  rating: number;
  posterUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  releaseDate,
  rating,
  posterUrl,
}) => {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state: RootState) =>
    isMovieFavorite(state, id)
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeMovie(id));
    } else {
      dispatch(addMovie(id));
    }
  };

  return (
    <div className={movieCard.movieCard}>
      <div className={movieCard.favorite}>
        <BookmarkIcon isFavorite={isFavorite} onClick={handleToggleFavorite} />
      </div>
      <Link href={`/movies/${id}`}>
        <Image
          src={posterImgUrl(posterUrl)}
          alt={`${title} poster`}
          width={500}
          height={750}
          layout="responsive"
        />

        <h2>{title}</h2>
        <p className={movieCard.info}>Release Date: {releaseDate}</p>
        <p className={movieCard.info}>Rating: {rating}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
