import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import skeletonImg from "../../assets/img/icon/skeleton_tmdb.png";

const MovieSlider = ({ movieList }) => {
  return (
    <div className="movie-slider">
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
        {movieList.map((movie, i) => (
          <SwiperSlide key={i}>
            <a href={`https://www.themoviedb.org/movie/${movie.id}?language=ko-KR`} target="_blank" rel="noreferrer">
              <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}` : skeletonImg} alt={movie.title} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
