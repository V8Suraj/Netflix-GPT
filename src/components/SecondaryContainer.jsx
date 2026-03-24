import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="-mt-100 relative z-20">
      <Movielist title={"▶︎ Now playing"} movies={movies.nowPlayingMovies} />
      <Movielist title={"★ Top Rated"} movies={movies.TopRatedMovies} />
      <Movielist title={"◴ Upcoming Movies"} movies={movies.UpcomingMovie} />
      <Movielist title={"📽 Recommended"} movies={movies.RecommendedMovie} />
    
      <Movielist title={"Horror"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
