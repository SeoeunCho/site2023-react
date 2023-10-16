import React, { useState } from "react";
import { unsplashTagData } from "../../constants/index";

const UnsplashTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = useState("전체");

  const btnClick = (tag) => {
    onSearch(tag);
    setActiveTag(tag);
    if (activeTag === "전체") tag = "all";
  };

  return (
    <div className="btn-box">
      {unsplashTagData.map((tag, i) => (
        <button
          key={i}
          className={
            `${tag.name === "전체" && activeTag === "전체" ? "activeBk" : ""}` +
            `${tag.name !== "전체" && tag.name === activeTag ? "active" : ""}`
          }
          onClick={() => {
            btnClick(tag.name);
          }}>
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default UnsplashTag;
