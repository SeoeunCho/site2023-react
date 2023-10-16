import React from "react";
import { mvSectionData } from "../../constants/index";
import { Link } from "react-router-dom";

const MvSection = () => {
  return (
    <section id="mv" className="section center">
    <div className="mv-inner container">
      <h3 dangerouslySetInnerHTML={{ __html: mvSectionData.title }}></h3>
      <p dangerouslySetInnerHTML={{ __html: mvSectionData.desc }}></p>

      <div className="mv-cont">
        {mvSectionData.data.map((mv, i) => (
          <div className="mv-item" key={i}>
          <figure className="mv-main">
            <a href={mv.link}>
              <img src={mv.img} alt={mv.title} />
              <span className="play-icon"></span>
            </a>
          </figure>
          <div className="mv-info">
            <div className="pic">
              <img src={mv.icon} alt={mv.title} />
            </div>
            <div className="title">
              <p>{ mv.title }</p>
              <span>{ mv.desc }</span>
            </div>
          </div>
        </div>
        ))}
      </div>

      <Link to="/mv" className="more-btn">뮤직비디오 더보기</Link>
    </div>
  </section>
  );
};

export default MvSection;
