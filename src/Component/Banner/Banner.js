import React,{useState, useEffect} from 'react'
import '../Banner/Banner.css';
import axios from '../../axios';
import requests from '../../requests';


const Banner = () => {
    const[movie, setMovie]=useState([])

    useEffect(()=>{
async function fetchData(){
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length)//too chnage the image is dinamicaly pick random numbers 
    ]
    );
    
    return request;
        }
        fetchData();
    }, []);
//    console.log(movie);
function truncate(str, n){
    return str?.length > n ? str.substr(0, n -1) + "..." : str;
}
  return (
<>           <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPostion: "center center",
          }}>
          
<div className="banner__contents">
    <h1 className="banner_title">
    {movie?.title || movie?.name || movie.original_name}
    </h1>
    <div className="banner__buttons">
    <button className="banner__button">play</button>
        <button className="banner__button">My List</button>
    </div>
    <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
</div>
<div className="banner__fadeBottom" /> 
</header>
</>

  );
        }

export default Banner;