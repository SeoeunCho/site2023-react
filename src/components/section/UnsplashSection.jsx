import React from "react";
import { unsplashSectionData } from "../../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import { Link } from "react-router-dom";

const UnsplashSection = () => {
  return (
    <section id="unsplash" className="section center">
      <div className="unsplash-inner container">
        <h3 dangerouslySetInnerHTML={{ __html: unsplashSectionData.title }}></h3>
        <p dangerouslySetInnerHTML={{ __html: unsplashSectionData.desc }}></p>

        <div className="slider">
          <Swiper
            className="swiper"
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={0}
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}>
            {unsplashSectionData.data.map((slider, i) => (
              <SwiperSlide key={i}>
                <div className="unsplash-item">
                  <a href={slider.link}>
                    <img src={slider.img} alt="이미지" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Link to="/unsplash" className="more-btn">
          이미지 더보기
        </Link>
      </div>
    </section>
  );
};

export default UnsplashSection;
