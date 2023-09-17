"use client";

import { useQuery } from "@tanstack/react-query";
import { getMovieId } from "@/services";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import ActorsSwiper from "@/components/CastSwiper";
import DetailedMovie from "@/components/DetailedMovie";
import stylesPageWrapper from "@/components/StylesPageWrapper/stylesPageWrapper.module.scss";

type Props = {
  params: {
    id: string;
  };
};

const Detailed = ({ params: { id } }: Props) => {
  const { data, error, isFetching } = useQuery({
    queryKey: ["movie"],
    queryFn: () => getMovieId(id),
  });

  if (error) return <ErrorMessage />;

  return (
    <div className={stylesPageWrapper.pageWrapper}>
      <Loading isLoading={isFetching}>
        <h2>{data?.movie.title}</h2>
        <DetailedMovie movie={data?.movie} />
        <ActorsSwiper actors={data?.actor.cast} />
      </Loading>
    </div>
  );
};

export default Detailed;
