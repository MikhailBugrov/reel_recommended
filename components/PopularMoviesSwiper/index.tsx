import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { posterImgUrl } from "@/utils/posterImgUrl";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import popularMoviesSwiper from "./popularMoviesSwiper.module.scss";

const PopularMoviesSwiper = ({ movies }: any) => {
  return (
    <Swiper
      className={popularMoviesSwiper.swiperWrapper}
      spaceBetween={-100}
      initialSlide={1}
      loop={true}
      slidesPerView={5}
      modules={[Autoplay, EffectCoverflow]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 10,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {movies?.map((movie: any) => (
        <SwiperSlide
          key={movie.id}
          className={popularMoviesSwiper.slideWrapper}
        >
          <Image
            src={posterImgUrl(movie.poster_path)}
            width={500}
            height={750}
            alt={movie.title}
            priority
            layout="responsive"
          />
          <div className={popularMoviesSwiper.additionalInfo}>
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
