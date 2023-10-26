import React, { useEffect, useState } from "react";
import { sliderSectionData } from "../../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Link } from "react-router-dom";

const SliderSection = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiperIdx, setSwiperIdx] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const handleActive = () => {
    setAutoplay((prev) => !prev);
    if (swiper) {
      !autoplay ? swiper.autoplay.stop() : swiper.autoplay.start();
    }
  };

  useEffect(() => {
    /**
     * controller의 left 클래스에 Navigation, Pagination 노드요소 이동
     *
     * 1. swiper 안에 모든 div 태그 찾아 마지막 요소 빼고 배열에 담기
     * 2. 요소를 담을 .controller > .left 찾기
     * 3. .left div 태그에 요소 이동
     **/

    let children = document.querySelectorAll(".main-swiper > div");
    let childArray = [...children].slice(1, 4);
    let lastChild = childArray.pop();
    childArray.splice(1, 0, lastChild);

    let findLeftDiv = document.querySelector(".controller > .left");
    childArray.forEach((el) => {
      findLeftDiv.appendChild(el);
    });
  }, []);

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
                <p className={`desc more${i + 1}`} dangerouslySetInnerHTML={{ __html: slider.desc }}></p>
                <Link className={`more${i + 1}`} to={slider.link}>
                  {slider.linkText} 바로가기
                </Link>
              </div>
            </SwiperSlide>
          ))}
          <div className="controller clear">
            <div className="left"></div>
            <div className="right" onClick={() => handleActive()}>
              <div className={`swiper-start-btn txt-hidden ${autoplay ? "on" : ""}`}>재생</div>
              <div className={`swiper-pause-btn txt-hidden ${!autoplay ? "on" : ""}`}>정지</div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSection;
