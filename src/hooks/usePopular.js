import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovie } from '../utils/MovieSlice';
import { API_OPTION } from '../utils/constant';

const usePopular = () => {
    const dispatch = useDispatch();

     useEffect(()=>{
        const movieapi = fetch('https://api.themoviedb.org/3/movie/popular',API_OPTION);

         (async function getdata(params) {
            const res = await movieapi;
            const data = await res.json();
            console.log(data.results);
            dispatch(addPopularMovie(data.results));
         })()
        
     },[])
}

export default usePopular;