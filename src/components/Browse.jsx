import Header from './Header'
import { API_OPTION } from '../utils/constant';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browse = () => {
  
  useNowPlayingMovies();
  
  return (
    <>
    <Header/>
   <MainContainer/>
   <SecondaryContainer/>
    
    
    </>
  )
}

export default Browse