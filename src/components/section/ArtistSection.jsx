import React from "react";
import { artistSectionData } from "../../constants/index";
import { Link } from "react-router-dom";

const ArtistSection = () => {
  return (
    <section id="artist" className="section center">
      <div className="artist-inner container">
        <h3 dangerouslySetInnerHTML={{ __html: artistSectionData.title }}></h3>
        <p dangerouslySetInnerHTML={{ __html: artistSectionData.desc }}></p>

        <div className="artist-desc">
          {artistSectionData.genres.map((genre, i) => (
            <div key={i}>
              <h4 className={`icon-bg${i + 1}`}>{genre.title}</h4>
              <p>{genre.desc}</p>
            </div>
          ))}
        </div>

        <Link to="/artist" className="more-btn">
          전체보기
        </Link>
      </div>
    </section>
  );
};

export default ArtistSection;
