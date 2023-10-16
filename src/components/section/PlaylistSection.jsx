import React from "react";
import { playlistSectionData } from "../../constants/index";
import { Link } from "react-router-dom";

const PlaylistSection = () => {
  return (
    <section id="playlist" className="section center">
      <div className="playlist-inner container">
        <h3 dangerouslySetInnerHTML={{ __html: playlistSectionData.title }}></h3>
        <p dangerouslySetInnerHTML={{ __html: playlistSectionData.desc }}></p>

        <div className="playlist-cont">
          {playlistSectionData.data.map((video, i) => (
            <div className="playlist-item" key={i}>
              <figure className="playlist-main">
                <a href={video.link}>
                  <img src={video.img} alt={video.title} />
                  <span className="play-icon"></span>
                </a>
              </figure>
              <div className="playlist-info">
                <div className="title">
                  <p>{video.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/playlist" className="more-btn">
          플레이리스트 더보기
        </Link>
      </div>
    </section>
  );
};

export default PlaylistSection;
