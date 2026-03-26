import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import logo from "../assets/Netflix_Bg.jpg";
const GPTSearch = () => {
   return (
    <>
    
        <div className="relative h-screen w-full overflow-hidden">
          {/* Animated Background */}
          <img
            src={logo}
            alt="background"
            className="absolute h-full w-full object-cover scale-110 animate-[zoom_20s_linear_infinite]"
          />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
    <GPTSearchBar/>
    <GPTMovieSuggestion/>

          </div>
    
    </>
   )
   
}

export default GPTSearch