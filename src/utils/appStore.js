import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import moviesReducer from './MovieSlice';
import gptReducer from './GPTSlice';
import configReducer from "./configslice";
const appStore = configureStore({
    //  its has a different reducer from different slices 
    reducer :{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        config:configReducer,
    }
})

export default appStore;