import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 px-24 flex flex-col justify-center text-white">

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent -z-10"></div>

      <h1 className="text-5xl font-bold">
        {title}
      </h1>

      <p className="py-6 text-lg w-1/3 text-gray-200">
        {overview}
      </p>

      <div className="flex gap-3 mt-4">

        <button className="bg-white text-black px-6 py-2 rounded font-medium hover:bg-gray-200 transition">
          ▶ Play
        </button>

        <button className="bg-gray-700/80 text-white px-6 py-2 rounded font-medium hover:bg-gray-600 transition">
          ℹ More Info
        </button>

      </div>

    </div>
  )
}

export default VideoTitle;