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

  return (
    <div>
      <section className="gallery-section">
        <div className="w-full h-[500px]">
          <div className="w-full h-full">
            <img
              src={`https://image.tmdb.org/t/p/original/${galleryMovie?.backdrop_path}`}
              className="object-cover h-[450px] md:h-full w-full"
              alt={galleryMovie?.title}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
