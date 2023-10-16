import React from "react";
import { movieSectionData } from "../../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import { Link } from "react-router-dom";

const MovieSection = () => {
  return (
    <section id="movie" className="section center">
      <div className="movie-inner container">
        <h3 dangerouslySetInnerHTML={{ __html: movieSectionData.title }}></h3>
        <p dangerouslySetInnerHTML={{ __html: movieSectionData.desc }}></p>

        <div className="slider">
          <Swiper
            className="swiper"
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            loop={true}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
            }}>
            {movieSectionData.data.map((slider, i) => (
              <SwiperSlide key={i}>
                <div className="movie-item">
                  <a href={slider.link}>
                    <img src={slider.img} alt="영화" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Link to="/movie" className="more-btn">
          전체보기
        </Link>
      </div>
    </section>
  );
};

export default MovieSection;
