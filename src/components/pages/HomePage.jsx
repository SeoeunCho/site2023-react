import React from "react";
import Main from "../layout/Main";

import SliderSection from '../section/SliderSection';
import ArtistSection from '../section/ArtistSection';
import MvSection from '../section/MvSection';
import PlaylistSection from '../section/PlaylistSection';
import UnsplashSection from '../section/UnsplashSection';
import MovieSection from '../section/MovieSection';

const HomePage = () => {
  return (
    <>
      <Main>
        <SliderSection />
        <ArtistSection />
        <MvSection />
        <PlaylistSection />
        <UnsplashSection />
        <MovieSection />
      </Main>
    </>
  )
};

export default HomePage;
