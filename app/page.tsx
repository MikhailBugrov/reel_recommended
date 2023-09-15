"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/services";
import styles from "@/components/StylesPageWrapper/styles.module.scss";
import Image from "next/image";
import { imageUrl } from "@/utils/constants";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: movies,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["movies", currentPage],
    queryFn: () => getMovies(currentPage),
  });

  if (error) return <div>Error loading movies</div>;
  if (isFetching) return <div>Loading...</div>;

  return (
    <div className={styles.pageWrapper}>
      <h2>Welcome</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {movies?.results.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <Image
              src={`${imageUrl}${movie.poster_path}`}
              width={300}
              height={400}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
