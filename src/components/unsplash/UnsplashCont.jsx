import React from "react";

const UnsplashCont = ({ imgList }) => {
  return (
    <div className="unsplash-cont">
      <ul>
        {imgList.map((image, i) => (
          <li key={i}>
            <a href={`https://unsplash.com/photos/${image.id}`} target="_blank" rel="noreferrer">
              <img src={image.urls.regular ? image.urls.regular : "/assets/img/icon/skeleton_tmdb.svg"} alt={image.alt_description} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnsplashCont;
