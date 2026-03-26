import user1 from "../assets/User1.jpg";
import logo from "../assets/Netflix_Logo_PMS.png";
export const LOGO = logo;
export const user_AVATAR  = user1;
export const Random_AVATAR = "https://i.pravatar.cc/300";

export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzRjOTIxNTFmNmIyMzUwZDdiZGViMzQ2ZTg0YzU2NSIsIm5iZiI6MTc3NDE3MDExNi40MDIsInN1YiI6IjY5YmZiMDA0MGU2YTBjZDQ4OTEzYmI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ogEbSltNap4nFLKXHr2PacrdhFxaDskvWHjZup76dQg'
  }
};

export const IMG_TMBD = "https://image.tmdb.org/t/p/original";


export const SUPPORTED_LANGUAGES = [
  {identifier:'en',name:'English'},
  {identifier:'hindi',name:'Hindi'},
  {identifier:'spanish',name:'Spanish'},
]