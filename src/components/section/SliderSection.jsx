import React, { useEffect, useRef, useState } from "react";
import { sliderSectionData } from "../../constants/index";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Link } from "react-router-dom";

const SliderSection = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiperIdx, setSwiperIdx] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleActive = () => {
    setIsActive((prev) => !prev);
    setIsPaused((prev) => !prev);
    isPaused ? swiper.autoplay.stop() : swiper.autoplay.start();
  };

  return (
    <section id="main-visual">
      <div className="inner">
        <Swiper
          className="main-swiper"
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          speed={1000}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) => setSwiperIdx(swiper.realIndex)}>
          {sliderSectionData.map((slider, i) => (
            <SwiperSlide className="banners" key={i}>
              <div className="banner-img">
                <img className="pc" src={slider.pcImg} alt={slider.imgText} />
                <img className="mobile" src={slider.mobileImg} alt={slider.imgText} />
              </div>
              <div className="banner-text">
                <p className="sub-title">{slider.subTitle}</p>
                <h3 className={`${swiperIdx === 1 ? "change-color" : ""}`}>
                  {slider.title[0]}
                  <p className={slider.key}>{slider.title[1]}</p>
                </h3>
                <p className="desc" dangerouslySetInnerHTML={{ __html: slider.desc }}></p>
                <Link className={`more${i + 1}`} to={slider.link}>
                  {slider.linkText} 바로가기
                </Link>
              </div>
            </SwiperSlide>
          ))}

          <div className="" onClick={() => handleActive}>
            <div className={`swiper-start-btn txt-hidden ${isActive ? "on" : ""}`}>재생</div>
            <div className={`swiper-pause-btn txt-hidden ${!isActive ? "on" : ""}`}>정지</div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSection;
