import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../utils/MovieSlice';
import { API_OPTION } from '../utils/constant';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();




  useEffect(()=> {
    const movieapi = fetch('https://api.themoviedb.org/3/movie/now_playing',API_OPTION);
  
    (async function getdata() {
      const res = await movieapi;
      const data = await res.json();
      console.log(data.results)
      dispatch(addNowPlaying(data.results))
    })()

  },[])

}

export default useNowPlayingMovies;