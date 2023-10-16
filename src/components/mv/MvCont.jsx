import React from "react";

const MvCont = ({ mvList }) => {
  return (
    <div className="mv-cont">
      <ul>
        {mvList.map((mv, i) => (
          <li key={i}>
            <a href={"https://www.youtube.com/watch?v=" + mv.id.videoId} target="_blank" rel="noopener noreferrer" title={mv.snippet.title}>
              <img
                src={mv.snippet.thumbnails.medium.url ? mv.snippet.thumbnails.medium.url : "/assets/img/icon/skeleton_tmdb.svg"}
                alt="mv"
              />
              <span>{mv.snippet.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MvCont;
