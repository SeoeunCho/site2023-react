import React, { useState } from "react";
import { playlistTagData } from "../../constants/index";

const PlaylistTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = useState("전체");

  const btnClick = (tag) => {
    onSearch(tag);
    setActiveTag(tag);
    if (activeTag === "전체") tag = "";
  };

  return (
    <div className="tag-box">
      {playlistTagData.map((tag, i) => (
        <div className="btn-box" key={i}>
          <button
            className={
              `${tag.name === "전체" && activeTag === "전체" ? "activeBk" : ""}` +
              `${tag.name !== "전체" && tag.name === activeTag ? "active" : ""}`
            }
            onClick={() => {
              btnClick(tag.name);
            }}>
            {tag.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlaylistTag;
