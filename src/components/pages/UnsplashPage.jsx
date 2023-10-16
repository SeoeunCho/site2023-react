import React, { useEffect, useState } from "react";
import Main from "../layout/Main";
import Search from "../layout/Search";
import UnsplashSlider from "../unsplash/UnsplashSlider";
import UnsplashTag from "../unsplash/UnsplashTag";
import UnsplashCont from "../unsplash/UnsplashCont";

const UnsplashPage = () => {
  const API_KEY = process.env.REACT_APP_UNSPLAH_KEY;
  const [imgData, setImgData] = useState([]);
  const [filteredImgData, setFilteredImgData] = useState([]);

  /** 검색 데이터 */
  const searchImgList = async (query) => {
    await fetch(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&per_page=30&query=${query}&lang=ko`)
      .then((response) => response.json())
      .then((result) => {
        setImgData(result.results);
        setFilteredImgData(result.results);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  /** 데이터 초기화 */
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos?client_id=${API_KEY}&per_page=30&lang=ko`)
      .then((response) => response.json())
      .then((result) => {
        setImgData(result);
        setFilteredImgData(result);
      })
      .catch((error) => console.log("error", error));
  }, [API_KEY]);

  return (
    <Main>
      <section id="unsplash" className="container page">
        <div className="unsplash-inner">
          <div className="cont-title">
            <p>Unsplash Image</p>
            <h2>언스플래쉬 이미지</h2>
          </div>
          <UnsplashSlider imgList={imgData} />

          <div className="unsplash-btn sch-area column">
            <UnsplashTag onSearch={searchImgList} />
            <Search onSearch={searchImgList} />
          </div>

          <UnsplashCont imgList={filteredImgData} />
        </div>
      </section>
    </Main>
  );
};

export default UnsplashPage;
