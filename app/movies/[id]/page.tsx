"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getMovieId } from "@/services";
import { posterImgUrl } from "@/utils/posterImgUrl";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import styles from "@/components/StylesPageWrapper/styles.module.scss";

type Props = {
  params: {
    id: string;
  };
};

const Detailed = ({ params: { id } }: Props) => {
  const {
    data: movie,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: () => getMovieId(id),
  });

  if (error) return <ErrorMessage />;

  return (
    <div className={styles.pageWrapper}>
      <h2>Detailed {movie?.title}</h2>
      <Loading isLoading={isFetching}>
        <Image
          src={posterImgUrl(movie?.poster_path)}
          width={500}
          height={750}
          alt={movie?.title}
        />
      </Loading>
    </div>
  );
};

export default Detailed;
