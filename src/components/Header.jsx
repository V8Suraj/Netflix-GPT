import React, { useEffect } from 'react'


import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constant';

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
}).catch((error) => {
   navigate("/")
});
  };

  useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    navigate('/Browse');

  } else {
    dispatch(removeUser());
    navigate('/');
  }
});
return () => unsubscribe();

},[]);
   

  return (
    <div className='absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between items-center'>

        <img 
          className='w-40'
          src={LOGO} 
          alt="logo" 
        />
       { user &&
       ( <div className='flex items-center gap-4'>
          <img 
           src={user.photoURL} 
            alt="user" 
            className='w-10 h-10 rounded-sm object-cover cursor-pointer hover:scale-110 transition duration-300' 
          />

          <button 
            onClick={handleSignOut}
            className='bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition'
          >
            Sign Out
          </button>
        </div>)}

    </div>
  )
}

export default Header;