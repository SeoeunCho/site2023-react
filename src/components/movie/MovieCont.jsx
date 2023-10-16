import React from "react";

const MovieCont = ({ movieList }) => {
  const getYear = (date) => {
    return date.substring(0, 4);
  };

  return (
    <div className="movie-cont">
      <ul>
        {movieList.map((movie, i) => (
          <li className="item" key={i}>
            <div className="item-flip">
              <div className="item-img">
                <img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/assets/img/icon/skeleton_tmdb.svg"}
                  alt={movie.title}
                />
              </div>
              <div className="item-detail">
                <div className="item-detail-inner">
                  <h2 className="title" title={movie.title}>
                    {movie.title}
                  </h2>
                  <p className="desc">{movie.overview}</p>
                  <div className="watch-btn">
                    <div className="rating" data-content={movie.vote_average.toFixed(1)}>
                      <i className="star"></i>
                      {movie.vote_average.toFixed(1)}
                    </div>
                    <span className="date">{getYear(movie.release_date)}</span>
                    <a href={`https://www.themoviedb.org/movie/${movie.id}?language=ko-KR`} target="_blank" rel="noreferrer">
                      자세히보기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCont;
