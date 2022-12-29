import React, { useState, useEffect } from "react";
import "../Row/Row.css";
import axios from "../../axios";

import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setMovies(requests.data.results);
      // console.log(requests);
      return requests;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);
const opts ={
  height: "390",
  width: "100%",
  playerVars: {
    autoplay:1,
  },
};
  const handileClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.orginal_name) //movieTrailer is response url
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); //the url string to searchable to search flexibele no limitation
          //Get the URLSearchParams object directly from an URL object
          setTrailerUrl(urlParams.get("v")); //to sepacfic search trarilerUrl video id v
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => handileClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} //this is ternary oprator methods
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "10px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}   {/* sort serquit opratore */}
      </div>
    </div>
  );
};

export default Row;


