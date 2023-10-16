import React, { useEffect, useState } from "react";
import Main from "../layout/Main";
import Search from "../layout/Search";
import TvSlider from "../tv/TvSlider";
import TvTag from "../tv/TvTag";
import TvCont from "../tv/TvCont";

const TvPage = () => {
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const [tvData, setTvData] = useState([]);

  /** 검색 데이터 */
  const searchTvList = async (query) => {
    await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=ko-KR&query=${query}`)
      .then((response) => response.json())
      .then((result) => {
        setTvData(result.results);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  /** 검색 필터 데이터 */
  const tvFilterdList = async (tag) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/tv/${tag}?api_key=${API_KEY}&language=ko-KR`);
      const result = await response.json();
      setTvData(result.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  /** 데이터 초기화 */
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ko-KR`)
      .then((response) => response.json())
      .then((result) => {
        setTvData(result.results);
      })
      .catch((error) => console.log("error", error));
  }, [API_KEY]);

  return (
    <Main>
      <section id="tv" className="container page">
        <div className="tv-inner">
          <div className="cont-title">
            <p>TV Program</p>
            <h2>TV 프로그램</h2>
          </div>
          <TvSlider tvPrograms={tvData} />

          <div className="tv-btn sch-area column">
            <TvTag onSearch={tvFilterdList} />
            <Search onSearch={searchTvList} />
          </div>

          <TvCont tvPrograms={tvData} />
        </div>
      </section>
    </Main>
  );
};

export default TvPage;
