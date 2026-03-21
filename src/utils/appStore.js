import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
const appStore = configureStore({
    //  its has a different reducer from different slices 
    reducer :{
        user:userReducer,
    }
})

export default appStore;