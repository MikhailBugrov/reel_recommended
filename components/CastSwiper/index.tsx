import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { posterImgUrl } from "@/utils/posterImgUrl";
import stylesCast from "./CastSwiper.module.scss";

interface Cast {
  id: string;
  profile_path: string;
  name: string;
  character: string;
}

interface ActorsSwiperProps {
  actors: Cast[];
}

const CastSwiper: React.FC<ActorsSwiperProps> = ({ actors }) => {
  return (
    <div className={stylesCast.wrapper}>
      <h3 className={stylesCast.title}>Cast</h3>
      <Swiper slidesPerView={2} modules={[Navigation]} navigation>
        {actors?.map((actor: any) => (
          <SwiperSlide key={actor.id} className={stylesCast.slideWrapper}>
            <Image
              src={posterImgUrl(actor.profile_path)}
              width={200}
              height={300}
              alt={actor.name}
              className={stylesCast.fullImage}
            />
            <div className={stylesCast.actorName}>
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastSwiper;
