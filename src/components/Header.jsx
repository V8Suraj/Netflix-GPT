import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import User1 from '../assets/User1.jpg'
import { toggleGPTSearchView } from '../utils/GPTSlice';
import { ChangeLanguage } from '../utils/configslice';

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showgptSearch =useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth).then(() => {
}).catch((error) => {
   navigate("/")
});
  };
  const handleLangChange = (e) => {
    dispatch(ChangeLanguage(e.target.value))
  }

  const handleGPTClick = () => {
     dispatch(toggleGPTSearchView())
  }

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

        { showgptSearch &&
         ( <select  onChange={handleLangChange} name="" id="" className='text-white bg-black p-1 border border-white rounded '>
          {SUPPORTED_LANGUAGES.map((lang)  => {
            return <option 
            value={lang.identifier}
           
            >{lang.name}</option>
          })}
        </select>
      )}
       <button 
            onClick={handleGPTClick}
            className='bg-purple-800 text-white px-3 py-1 rounded hover:bg-red-700 transition'
          >
            {showgptSearch ? "HomePage" : 'Gpt Search'}
          </button>
          <img 
           src={User1} 
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