import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollTop from "./components/layout/ScrollTop";

import HomePage from "./components/pages/HomePage";
import ArtistPage from "./components/pages/ArtistPage";
import MvPage from "./components/pages/MvPage";
import PlaylistPage from "./components/pages/PlaylistPage";
import UnsplashPage from "./components/pages/UnsplashPage";
import MoviePage from "./components/pages/MoviePage";
import TvPage from "./components/pages/TvPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/mv" element={<MvPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/unsplash" element={<UnsplashPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/tv" element={<TvPage />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
};

export default App;
