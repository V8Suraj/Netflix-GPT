import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer_Videos } from '../utils/MovieSlice';
import { API_OPTION } from '../utils/constant';

const useVideoBackground = (movieid) => {

   
 const dispatch = useDispatch();
    const trailervideos = useSelector((store) => store.movies?.Trailer_Videos);

  useEffect(() => {
    const movieid_video = fetch(
      "https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US",
      API_OPTION,
    );
    (async () => {
      const res = await movieid_video;
      const data = await res.json();
      console.log(data)
     
      const filtertrailer = data.results.filter(
        (video) => video.type === "Trailer",
      );
      console.log(filtertrailer)
      const trailer = filtertrailer.length ? filtertrailer[0] : data.results[0];
   
      dispatch(addTrailer_Videos(trailer));
    })();
  }, []);

}

export default useVideoBackground