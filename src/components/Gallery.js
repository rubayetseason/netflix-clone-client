import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import item_requests from "./shared/MovieApi";

const Gallery = () => {
  const [galleryMovies, setGalleryMovies] = useState([]);

  useEffect(() => {
    axios.get(item_requests.popular).then((data) => {
      setGalleryMovies(data.data.results);
    });
  }, []);

  const galleryMovie =
    galleryMovies[Math.floor(Math.random() * galleryMovies.length)];
  console.log(galleryMovie);

  return <div>this is gallery</div>;
};

export default Gallery;
