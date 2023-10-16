import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";

const UnsplashSlider = ({ imgList }) => {
  return (
    <div className="unsplash-slider">
      <Swiper
        loop={true}
        slidesPerView={3}
        speed={3000}
        spaceBetween={10}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}>
        {imgList.map((image, i) => (
          <SwiperSlide key={i}>
            <a href={`https://unsplash.com/photos/${image.id}`} target="_blank" rel="noreferrer">
              <img src={image.urls.regular ? image.urls.regular : "/assets/img/icon/skeleton_tmdb.svg"} alt={image.alt_description} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UnsplashSlider;
