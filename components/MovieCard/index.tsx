import Image from "next/image";
import { imageUrl } from "@/utils/constants";
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
          src={`${imageUrl}${posterUrl}`}
          alt={`${title} poster`}
          width={300}
          height={400}
          layout="responsive"
          objectFit="cover"
        />

        <h2>{title}</h2>
        <p className={styles.info}>Release Date: {releaseDate}</p>
        <p className={styles.info}>Rating: {rating}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
