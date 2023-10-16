import React, { useEffect, useState } from "react";
import Main from "../layout/Main";
import Search from "../layout/Search";
import MovieSlider from "../movie/MovieSlider";
import MovieTag from "../movie/MovieTag";
import MovieCont from "../movie/MovieCont";

const MoviePage = () => {
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const [movieData, setMovieData] = useState([]);

  /** 검색 데이터 */
  const searchMovieList = async (query) => {
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR&query=${query}`)
      .then((response) => response.json())
      .then((result) => {
        setMovieData(result.results);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  /** 검색 필터 데이터 */
  const movieFilterdList = async (tag) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${tag}?api_key=${API_KEY}&language=ko-KR`);
      const result = await response.json();
      setMovieData(result.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  /** 데이터 초기화 */
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`)
      .then((response) => response.json())
      .then((result) => {
        setMovieData(result.results);
      })
      .catch((error) => console.log("error", error));
  }, [API_KEY]);

  return (
    <Main>
      <section id="movie" className="container page">
        <div className="movie-inner">
          <div className="cont-title">
            <p>Movie</p>
            <h2>영화</h2>
          </div>
          <MovieSlider movieList={movieData} />

          <div className="movie-btn sch-area column">
            <MovieTag onSearch={movieFilterdList} />
            <Search onSearch={searchMovieList} />
          </div>

          <MovieCont movieList={movieData} />
        </div>
      </section>
    </Main>
  );
};

export default MoviePage;
