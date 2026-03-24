import Header from './Header'
import { API_OPTION } from '../utils/constant';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import useMovieRecommendation from '../hooks/useMovieRecommendation';



const Browse = () => {
  
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpcomingMovie();
  useMovieRecommendation();
  
  return (
    <>
    <Header/>
   <MainContainer/>
   <SecondaryContainer/>
    
    
    </>
  )
}

export default Browse