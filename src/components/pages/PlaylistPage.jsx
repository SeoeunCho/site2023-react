import React, { useEffect, useState } from "react";
import Main from "../layout/Main";
import Search from "../layout/Search";
import PlaylistTag from "../playlist/PlaylistTag";
import PlaylistCont from "../playlist/PlaylistCont";
import { decodeHTMLEntities } from "../../utils/decodeText";

const PlaylistPage = () => {
  const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
  const [playlistData, setPlaylistData] = useState([]);
  const playlistQuery = "playlist 플레이리스트 모음";

  /** 검색 데이터 */
  const searchPlaylist = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query + playlistQuery}&type=video&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        setPlaylistData(
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
  const filteredPlaylist = playlistData.filter((playlist) => {
    const title = playlist.snippet.title.toLowerCase();
    return title.includes("playlist") || title.includes("플레이리스트") || title.includes("모음");
  });

  /** 데이터 초기화 */
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${playlistQuery}&type=video&key=${API_KEY}`)
      .then((response) => response.json())
      .then((result) => {
        setPlaylistData(
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
      <section id="playlist" className="container page">
        <div className="playlist-inner">
          <div className="cont-title">
            <p>Playlist</p>
            <h2>플레이리스트</h2>
          </div>

          <div className="playlist-btn sch-area center">
            <PlaylistTag onSearch={searchPlaylist} />
            <Search onSearch={searchPlaylist} />
          </div>

          <PlaylistCont playlists={filteredPlaylist} />
        </div>
      </section>
    </Main>
  );
};

export default PlaylistPage;
