import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Movie from "./Movie";
import "./Row.css";

const Row = ({ genre, fetchUrl }) => {
  const [rowMovies, setRowMovies] = useState([]);


  useEffect(() => {
    axios.get(fetchUrl).then((data) => {
      setRowMovies(data.data.results);
    });
  }, [fetchUrl]);


  

  return (
    <div className="mb-5">
      <h1 className="text-xl md:text-2xl ml-5 font-semibold">{genre}</h1>
      <div className="row-container">
        {rowMovies.map((rowMovie, i) => (
          <Movie
            key={i}
            rowMovie={rowMovie}
          ></Movie>
        ))}
      </div>
    </div>
  );
};

export default Row;
