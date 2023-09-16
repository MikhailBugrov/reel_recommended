import Image from "next/image";
import { posterImgUrl } from "@/utils/posterImgUrl";
import Link from "next/link";
import styles from "./card.module.scss";

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
    <div className={styles.movieCard}>
      <Link href={`/movies/${id}`}>
        <Image
          src={posterImgUrl(posterUrl)}
          alt={`${title} poster`}
          width={500}
          height={750}
          layout="responsive"
        />

        <h2>{title}</h2>
        <p className={styles.info}>Release Date: {releaseDate}</p>
        <p className={styles.info}>Rating: {rating}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
