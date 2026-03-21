import React from 'react'
import logo from "../assets/Netflix_Logo_PMS.png";
import user1 from "../assets/User1.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    Navigate('/')
}).catch((error) => {
  Navigate("/error")
});
  };

  return (
    <div className='absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between items-center'>

        <img 
          className='w-40'
          src={logo} 
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