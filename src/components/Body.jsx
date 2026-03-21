import React, { useEffect } from "react";
import Login from "./Login";
import { BrowserRouter, Routes , Route, useNavigate} from "react-router-dom";
import Browse from "./Browse";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
const Body = () =>{
    const dispatch = useDispatch();

/*
Is code me <BrowserRouter> React Router ka main wrapper component hai jo tumhari app me routing enable karta hai. Yeh browser ke URL ko listen karta hai aur decide karta hai ki kaunsa component render karna hai based on current path. Iske andar <Routes> component hota hai jo multiple <Route> ko hold karta hai. <Routes> ka kaam hota hai ki current URL ke according sirf ek matching <Route> ko render kare.
<Route> decide karta hai:
Kaunsa component kis URL par dikhana hai


*/

useEffect(()=>{
 onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName,photoURL}= user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
  
    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
 
  }
});

},[])
    

    return(
    //    Router implement here
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/browse" element={<Browse/>}/>
    </Routes>
    
    </BrowserRouter>

    
    )
}

export default Body;