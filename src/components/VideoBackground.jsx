import { useSelector } from "react-redux";
import useVideoBackground from "../hooks/useVideoBackground";
import { API_OPTION } from "../utils/constant";

const VideoBackground = ({movieid}) => {
   const trailervideos = useSelector((store) => store.movies?.Trailer_Videos);
   useVideoBackground(movieid);
  return (
    <div className="w-full overflow-x-hidden">
      <iframe
        className="w-full aspect-video overflow-x-hidden"
       src={`https://www.youtube.com/embed/${trailervideos?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
