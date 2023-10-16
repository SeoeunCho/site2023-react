import React, { useState } from "react";
import { tvTagData } from "../../constants/index";

const TvTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = useState("인기 TV 프로그램");

  const btnClick = (tag, eng) => {
    onSearch(eng);
    setActiveTag(tag);
  };

  return (
    <div className="btn-box">
      {tvTagData.map((tag, i) => (
        <button
          key={i}
          className={`${tag.name === activeTag ? "active" : ""}`}
          onClick={() => {
            btnClick(tag.name, tag.eng);
          }}>
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default TvTag;
