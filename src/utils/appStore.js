import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import moviesReducer from './MovieSlice';
const appStore = configureStore({
    //  its has a different reducer from different slices 
    reducer :{
        user:userReducer,
        movies:moviesReducer
    }
})

export default appStore;