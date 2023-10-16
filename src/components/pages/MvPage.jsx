import React, { useEffect, useState } from "react";
import Main from "../layout/Main";
import Search from "../layout/Search";
import MvTag from "../mv/MvTag";
import MvCont from "../mv/MvCont";
import { decodeHTMLEntities } from "../../utils/decodeText";

const MvPage = () => {
  const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
  const [mvData, setMvData] = useState([]);
  const mvQuery = "mv m/v musicvideo officialvideo";

  /** 검색 데이터 */
  const searchMvList = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query + mvQuery}&type=video&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        setMvData(
          result.items.map((item) => ({
            ...item,
            snippet: {
              ...item.snippet,
              title: decodeHTMLEntities(item.snippet.title),
            },
          }))
        );
      })
      .catch((error) => console.log("error", error));
  };

  /** 데이터 필터링 */
  const filteredMvList = mvData.filter((mv) => {
    const title = mv.snippet.title.toLowerCase();
    return title.includes("mv") || title.includes("m/v") || title.includes("music video") || title.includes("official video");
  });

  /** 데이터 초기화 */
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${mvQuery}&type=video&key=${API_KEY}`)
      .then((response) => response.json())
      .then((result) => {
        setMvData(
          result.items.map((item) => ({
            ...item,
            snippet: {
              ...item.snippet,
              title: decodeHTMLEntities(item.snippet.title),
            },
          }))
        );
      })
      .catch((error) => console.log("error", error));
  }, [API_KEY]);

  return (
    <Main>
      <section id="mv" className="container page">
        <div className="mv-inner">
          <div className="cont-title">
            <p>Music Video</p>
            <h2>뮤직비디오</h2>
          </div>

          <div className="mv-btn sch-area center">
            <MvTag onSearch={searchMvList} />
            <Search onSearch={searchMvList} />
          </div>

          <MvCont mvList={filteredMvList} />
        </div>
      </section>
    </Main>
  );
};

export default MvPage;
