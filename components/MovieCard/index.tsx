import Image from "next/image";
import { posterImgUrl } from "@/utils/posterImgUrl";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "@/redux/features/favorites";
import { RootState } from "@/redux/store";
import { isMovieFavorite } from "@/redux/features/favorites/selector";
import BookmarkIcon from "@/components/BookmarkIcon";
import stylesCard from "./MovieCard.module.scss";

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
    <div className={stylesCard.card}>
      <div className={stylesCard.favorite}>
        <BookmarkIcon isFavorite={isFavorite} onClick={handleToggleFavorite} />
      </div>
      <Link href={`/movies/${id}`}>
        <div>
          <Image
            src={posterImgUrl(posterUrl)}
            alt={`${title} poster`}
            width={300}
            height={450}
            // priority
          />
        </div>

        <h2 className={stylesCard.title}>{title}</h2>
        <p className={stylesCard.info}>Release Date: {releaseDate}</p>
        <p className={stylesCard.info}>Rating: {rating}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
