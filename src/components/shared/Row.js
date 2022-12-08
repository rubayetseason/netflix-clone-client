import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Movie from "./Movie";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ genre, fetchUrl }) => {
  const [rowMovies, setRowMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleMovie = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const searchId = url.substring(32);
          setTrailerUrl(searchId);
          console.log(searchId);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    axios.get(fetchUrl).then((data) => {
      setRowMovies(data.data.results);
    });
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="mb-5">
      <h1 className="text-xl md:text-2xl font-semibold ml-5">{genre}</h1>
      <div className="row-container">
        {rowMovies.map((rowMovie, i) => (
          <Movie key={i} rowMovie={rowMovie} handleMovie={handleMovie}></Movie>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
