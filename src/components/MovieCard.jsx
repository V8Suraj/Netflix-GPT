import React from 'react'
import { IMG_TMBD } from '../utils/constant'

const MovieCard = ({backdrop_path}) => {
  return (
    <div className='w-70'>
        <img 
        className="w-full h-full object-cover"
        src={IMG_TMBD+backdrop_path} 
        alt="" 
        />
    </div>
  )
}

export default MovieCard