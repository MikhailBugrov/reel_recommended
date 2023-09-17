import Image from "next/image";
import { posterImgUrl } from "@/utils/posterImgUrl";
import Link from "next/link";
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
  return (
    <div className={movieCard.movieCard}>
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
