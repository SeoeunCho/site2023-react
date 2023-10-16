import React, { useState } from "react";
import { movieTagData } from "../../constants/index";

const MovieTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = useState("인기 영화");

  const btnClick = (tag, eng) => {
    onSearch(eng);
    setActiveTag(tag);
  };

  return (
    <div className="btn-box">
      {movieTagData.map((tag, i) => (
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

export default MovieTag;
