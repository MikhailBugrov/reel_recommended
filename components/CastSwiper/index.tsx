import Image from "next/image";
import { posterImgUrl } from "@/utils/posterImgUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import castStyles from "./castStyles.module.scss";

const ActorsSwiper = ({ actors }: any) => {
  return (
    <div className={castStyles.actorsWrapper}>
      <h3 className={castStyles.castTitle}>Cast</h3>
      <Swiper slidesPerView={2} modules={[Navigation]} navigation>
        {actors?.map((actor: any) => (
          <SwiperSlide key={actor.id} className={castStyles.slideWrapper}>
            <Image
              src={posterImgUrl(actor.profile_path)}
              width={200}
              height={300}
              alt={actor.name}
              layout="responsive"
            />
            <div className={castStyles.actorName}>
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActorsSwiper;
