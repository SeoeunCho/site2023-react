const TvCont = ({ tvPrograms }) => {
  const getYear = (date) => {
    return date.substring(0, 4);
  };

  return (
    <div className="tv-cont">
      <ul>
        {tvPrograms.map((tv, i) => (
          <li className="item" key={i}>
            <div className="item-flip">
              <div className="item-img">
                <img
                  src={tv.poster_path ? `https://image.tmdb.org/t/p/w500${tv.poster_path}` : "/assets/img/icon/skeleton_tmdb.svg"}
                  alt={tv.name}
                />
              </div>
              <div className="item-detail">
                <div className="item-detail-inner">
                  <h2 className="title" title={tv.name}>
                    {tv.name}
                  </h2>
                  <p className="desc">{tv.overview}</p>
                  <div className="watch-btn">
                    <div className="rating" data-content={tv.vote_average.toFixed(1)}>
                      <i className="star"></i>
                      {tv.vote_average.toFixed(1)}
                    </div>
                    <span className="date">{getYear(tv.first_air_date)}</span>
                    <a href={`https://www.themoviedb.org/tv/${tv.id}?language=ko-KR`} target="_blank" rel="noreferrer">
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

export default TvCont;
