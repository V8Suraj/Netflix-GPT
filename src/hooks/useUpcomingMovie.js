import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constant';
import { addTopRatedMovies, addUpcomingMovie } from '../utils/MovieSlice';

const useUpcomingMovie = () => {
  const dispatch = useDispatch();

  

  useEffect(()=> {
    const movieapi = fetch('https://api.themoviedb.org/3/movie/upcoming',API_OPTION);
    (async function getdata() {
      const res = await movieapi;
      const data = await res.json();
      console.log(data.results);
      dispatch(addUpcomingMovie(data.results));  
    })()
  },[])
}

export default useUpcomingMovie