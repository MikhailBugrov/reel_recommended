import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { posterImgUrl } from "@/utils/posterImgUrl";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import stylesSwiper from "./PopularMoviesSwiper.module.scss";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface PopularMoviesSwiperProps {
  movies: Movie[];
}

const PopularMoviesSwiper: React.FC<PopularMoviesSwiperProps> = ({
  movies,
}) => {
  return (
    <Swiper
      className={stylesSwiper.swiperWrapper}
      spaceBetween={-50}
      initialSlide={1}
      loop={true}
      slidesPerView={3}
      modules={[Autoplay, EffectCoverflow]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 20,
        depth: 500,
        modifier: 1,
      }}
    >
      {movies?.map((movie) => (
        <SwiperSlide key={movie.id} className={stylesSwiper.slideWrapper}>
          <Image
            src={posterImgUrl(movie.poster_path)}
            width={500}
            height={750}
            alt={movie.title}
            priority
          />

          <div className={stylesSwiper.info}>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularMoviesSwiper;
