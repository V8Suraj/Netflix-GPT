import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name : "movies",
    initialState:{
        nowPlayingMovies:null,
        Trailer_Videos:null,
    },
    reducers:{
      addNowPlaying : (state,action) => {
        state.nowPlayingMovies = action.payload;
      },

      addTrailer_Videos : (state,action) => {
        state.Trailer_Videos = action.payload;
      }
    }
});

export default MovieSlice.reducer;
export const{addNowPlaying,addTrailer_Videos} = MovieSlice.actions;