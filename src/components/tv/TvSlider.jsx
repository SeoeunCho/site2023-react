import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import skeletonImg from "../../assets/img/icon/skeleton_tmdb.png";

const TvSlider = ({tvPrograms}) => {
  return (
    <div className="tv-slider">
      <Swiper
        loop={true}
        slidesPerView={1}
        speed={1000}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}>
        {tvPrograms.map((tv, i) => (
          <SwiperSlide key={i}>
            <a href={`https://www.themoviedb.org/tv/${tv.id}?language=ko-KR`} target="_blank" rel="noreferrer">
              <img src={tv.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${tv.backdrop_path}` : skeletonImg} alt={tv.name} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default TvSlider;
