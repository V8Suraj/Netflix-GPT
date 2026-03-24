import { createSlice } from "@reduxjs/toolkit";


const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    Trailer_Videos: null,
    PopularMovie: null,
    TopRatedMovies: null,
    UpcomingMovie:null,
    RecommendedMovie:null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTrailer_Videos: (state, action) => {
      state.Trailer_Videos = action.payload;
    },

    addPopularMovie: (state, action) => {
      state.PopularMovie = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpcomingMovie:(state,action)=>{
      state.UpcomingMovie = action.payload;
    },
    addMovieRecommendation : (state,action) => {
      state.RecommendedMovie = action.payload;
    }
    
  },
});

export default MovieSlice.reducer;
export const {
  addNowPlaying,
  addTrailer_Videos,
  addPopularMovie,
  addTopRatedMovies,
  addUpcomingMovie,
  addMovieRecommendation,
} = MovieSlice.actions;
