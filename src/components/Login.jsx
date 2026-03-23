import React, { use, useEffect, useState } from "react";
import Header from "./Header";
import logo from "../assets/Netflix_Bg.jpg";
import checkedValid_data from "../utils/checkedValid_Data";
import ValidateCheck from "../utils/ValidateCheck";
import SignUp from "./SignUp";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/Firebase";
import Browse from "./Browse";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { Random_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignup, setisSignup] = useState(true);
  const [email , setemail] = useState('');
  const [password,setpassword] = useState('');
  const [errors,seterror] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch()


//   useEffect(()=>{
//     if(email!='') console.log(email);
//   },[email])

  // true = signup hai new account banao

  const togglesignup = () => {
    setisSignup(!isSignup);
  };


  const handleform = (e) => {
     console.log(e.target)
    // Validate the form Data
    console.log(checkedValid_data);
    const All_InputField = {email,password};
    console.log(All_InputField);
    ValidateCheck(All_InputField,seterror);
    console.log(errors)

    // if(errors) return;
   


    //SignIn and SignuP
   if(!isSignup){
    // if me idhar component render krao tho signup wala alag seh banakr tho woh render nhi hoga ,
    // irf tab render hota hai jab woh return JSX me ho.
// Function ke andar aise likhne se: <Signup/>

// Component render nahi hota

// Logic execute nahi hota

// Firebase call nahi hoti

// Yeh bas ek unused expression hai.



    // ! for signup logic
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    updateProfile(auth.currentUser, {
  displayName: "Suraj Pandey" , 
  photoURL: Random_AVATAR
}).then(() => {
  const {uid,email,displayName,photoURL}= auth.currentUser;
  dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
    console.log(user);
    // ...
  })
  .catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
  console.log(errorMessage);
    // seterror(errorCode+errorMessage)
    // ..
  })
   }

   else {
  // ! sign in functionality 
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    // seterror(errorCode+errorMessage);
    console.log(errorCode);
  console.log(errorMessage);
  });
    
   }
  }

  return (
    //Login Container

    <div className="relative h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <img
        src={logo}
        alt="background"
        className="absolute h-full w-full object-cover scale-110 animate-[zoom_20s_linear_infinite]"
      />

      {/* Header */}
      <Header />

      {/* Login Formed Handle */}

      <div className="relative flex justify-center items-center h-full px-4">
        <form
          className="
 bg-black/50 backdrop-blur-lg
 border border-gray-700
 p-12 rounded-xl
 w-full max-w-md
 text-white
 shadow-2xl
 bg-opacity-80
 "
 onSubmit={(e)=>{e.preventDefault()}}
        >
          <h1 className="text-3xl font-bold mb-8">
            {isSignup ? "Sign in" : "Sign Up"}
          </h1>

          {/* Login up */}

          {/* The logical AND operator (&&) is used in React for conditional rendering. If the left side condition is true, the right side JSX element is rendered. If false, nothing is rendered. 
Why We Wrapped in () ? Cleaner JSX formatting ke liye:

*/}

          {!isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 bg-gray-800/70 rounded-2xl
focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
          )}

          {!isSignup && (
            <div
              className="flex bg-gray-800/70 rounded-2xl mb-4 
  focus-within:ring-2 focus-within:ring-red-600 transition"
            >
              {/* Country Selector */}
              <select
                className="bg-gray-800 text-white px-3 rounded-l-2xl 
      outline-none border-r border-gray-600"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
              </select>

              {/* Phone Input */}
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full p-3 bg-transparent outline-none text-white"
              />
            </div>
          )}

          {/* this is for email input */}
          <input
            type="text"
            placeholder="Enter Email Address"
            className="w-full p-3 mb-4 bg-gray-800/70 rounded-2xl
focus:outline-none focus:ring-2 focus:ring-red-600 transition"
           onChange={
           (e) => {
            setemail(e.target.value);
           }
        }
          />
          {errors && (
          <span className="text-red-600  mb-3 block text-sm">
  {errors.email}
</span>

          )
          }

          
          

          {/* this is for password input */}

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 mb-4 bg-gray-800/70 rounded-2xl
focus:outline-none focus:ring-2 focus:ring-red-600 transition"
onChange={(e) => {
    setpassword(e.target.value)
}}
          />

               {errors && (
          <span className="text-red-600  mb-3 block text-sm">
  {errors.password}
</span>

          )
          }

          {/* Button for Sign in */}

          <button
            className="w-full bg-red-600
py-3 rounded font-semibold hover:bg-red-700 transition duration-300"
         onClick={handleform}
          >
           {isSignup ? "Sign in" : "Sign Up"}
          </button>

          {/* Text  */}

          <p className="text-gray-400 text-sm mt-6">
            {!isSignup
              ? "Existing User's ?"
              : "Don't Worry Create your Account"}
            <span
              className="text-white hover:underline cursor-pointer ml-1"
              onClick={togglesignup}
            >
              {!isSignup ? "Login" : "- Sign Up"}
            </span>
          </p>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-400 mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-red-600 w-4 h-4" />
              Remember me
            </label>

            <span className="hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            This page is Protected by Google reCaptcha to ensure you're not a
            bot.{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
