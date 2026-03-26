import Header from './Header'
import { API_OPTION } from '../utils/constant';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import useMovieRecommendation from '../hooks/useMovieRecommendation';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
  const showGPTSearch = useSelector((state) => state.gpt.showGptSearch);
  
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpcomingMovie();
  useMovieRecommendation();
  
  return (
    <>
    <Header/>
   {
    showGPTSearch ? (<GPTSearch/>) : (<>
<MainContainer/>
<SecondaryContainer/>
    </>)
   }
    
    
    </>
  )
}

export default Browse