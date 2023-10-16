import React, { useState } from "react";
import { artistData, artistMenus } from "../../constants/index";

const ArtistPage = () => {
  const [activeButton, setActiveButton] = useState("POP");

  const handleButtonClick = (menu) => {
    setActiveButton(menu);
  };

  const activeArtistData = artistData.find((item) => item.menu === activeButton);

  return (
    <section id="artist" className="container page">
      <div className="artist-inner">
        <div className="cont-title">
          <p>Genre By Artists</p>
          <h2>장르별 아티스트</h2>
        </div>
        <div className="artist-btn sch-area center">
          <div className="btn-box">
            <button
              className={`${activeButton === artistMenus.menu1 ? "active" : ""}`}
              onClick={() => handleButtonClick(artistMenus.menu1)}>
              {artistMenus.menu1}
            </button>
            <button
              className={`${activeButton === artistMenus.menu2 ? "active" : ""}`}
              onClick={() => handleButtonClick(artistMenus.menu2)}>
              {artistMenus.menu2}
            </button>
            <button
              className={`${activeButton === artistMenus.menu3 ? "active" : ""}`}
              onClick={() => handleButtonClick(artistMenus.menu3)}>
              {artistMenus.menu3}
            </button>
            <button
              className={`${activeButton === artistMenus.menu4 ? "active" : ""}`}
              onClick={() => handleButtonClick(artistMenus.menu4)}>
              {artistMenus.menu4}
            </button>
          </div>
        </div>
        <div className="artist-cont">
          <div className="genre-desc">
            <p className="genre-title">{activeArtistData.menu}</p>
            <div className="genre-txtbox">
              <p>{activeArtistData.title}</p>
              <p>{activeArtistData.desc}</p>
            </div>
          </div>
          {activeArtistData.artistLists.map((item, i) => (
            <div className="artist-list" key={i}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <figure className="artist-photo">
                  <img src={item.artistImg} alt={item.name} />
                </figure>
                <div className="artist-info">
                  <div className="artist-logo">
                    <img src={item.iconImg} alt={item.name} />
                  </div>
                  <div className="artist-name">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistPage;
