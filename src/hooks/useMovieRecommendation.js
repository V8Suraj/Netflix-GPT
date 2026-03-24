import React from 'react'
import { API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addMovieRecommendation } from '../utils/MovieSlice';

const useMovieRecommendation = () => {
const dispatch = useDispatch();

async function getAllRecommendations() {
  try {
    // Step 1: First API call
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTION
    );
    const data = await res.json();

    const movies = data.results;

    // Step 2: Sab movie_id se second API call
    const recommendationPromises = movies.map((movie) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/recommendations`,
        API_OPTION
      ).then((res) => res.json())
       .then((data) => data.results);
    });

    // Step 3: Sab API calls ek saath run hongi
    const allRecommendations = await Promise.all(recommendationPromises);
    const flatMovies = allRecommendations.flat();
    console.log(flatMovies)
    dispatch(addMovieRecommendation(flatMovies));
    console.log(allRecommendations);

  } catch (error) {
    console.error("Error:", error);
  }
}

getAllRecommendations();
}

export default useMovieRecommendation