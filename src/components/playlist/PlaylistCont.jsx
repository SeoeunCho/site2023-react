import React from "react";

const PlaylistCont = ({ playlists }) => {
  return (
    <div className="playlist-cont">
      <ul>
        {playlists.map((playlist, i) => (
          <li key={i}>
            <a
              href={"https://www.youtube.com/watch?v=" + playlist.id.videoId}
              target="_blank"
              rel="noopener noreferrer"
              title={playlist.snippet.title}>
              <img
                src={playlist.snippet.thumbnails.medium.url ? playlist.snippet.thumbnails.medium.url : "/assets/img/icon/skeleton_tmdb.svg"}
                alt="playlist"
              />
              <span>{playlist.snippet.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistCont;
