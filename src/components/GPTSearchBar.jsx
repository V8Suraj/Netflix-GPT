import React from "react";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
 
  return (
    <div className="flex justify-center items-center pt-40 mb-140">
      <form className="flex bg-black/70 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white rounded-2xl">
        
        <input
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
          className="p-4 w-[300px] md:w-[500px] outline-none bg-transparent text-white placeholder-gray-400 "
        />

        <button className="bg-red-600 text-white px-6 hover:bg-red-700 transition">
          {lang[langkey].search}
        </button>

      </form>
    </div>
  );
};

export default GPTSearchBar;