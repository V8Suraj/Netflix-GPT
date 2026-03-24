import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constant';
import { addTopRatedMovies } from '../utils/MovieSlice';

const useTopRated = () => {
    // dispatch work is that data ko store me bhejna 
  const dispatch = useDispatch();

    

  useEffect(()=>{
    const movieapi = fetch('https://api.themoviedb.org/3/movie/top_rated',API_OPTION);
    
  (async function getdata() {
        const res = await movieapi;
        const data = await res.json();
        console.log(data.results);
        dispatch(addTopRatedMovies(data.results));
    })()
  },[])
}

export default useTopRated