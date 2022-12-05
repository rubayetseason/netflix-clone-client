import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import item_requests from "./shared/MovieApi";
import Row from "./shared/Row";

const Gallery = () => {
  const [galleryMovies, setGalleryMovies] = useState([]);

  useEffect(() => {
    axios.get(item_requests.popular).then((data) => {
      setGalleryMovies(data.data.results);
    });
  }, []);

  const galleryMovie =
    galleryMovies[Math.floor(Math.random() * galleryMovies.length)];

  return (
    <div>
      <section className="gallery-section">
        <div className="w-full h-[450px] md:h-[500px]">
          <div className="w-full h-full">
            <img
              src={`https://image.tmdb.org/t/p/original/${galleryMovie?.backdrop_path}`}
              className="object-cover h-[450px] md:h-full w-full brightness-75"
              alt={galleryMovie?.title}
            />
            <div className="absolute w-full top-[20%] p-5 md:p-8">
              <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                {galleryMovie?.title}
              </h1>
              <div className="my-3">
                <button className="border bg-gray-300 text-black py-2 px-4 mr-4">
                  Play
                </button>
                <button className="border py-2 px-4">Watch Later</button>
              </div>
              <p className="text-sm">Released: {galleryMovie?.release_date}</p>
              <p className="w-full text-sm md:text-base md:w-[75%] lg:w-[50%] mt-3">
                {galleryMovie?.overview.slice(0, 100) + "..."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="rows-section my-5">
        <Row genre="Top Rated" fetchUrl={item_requests?.top_rated}></Row>
        <Row genre="Upcoming" fetchUrl={item_requests?.upcoming}></Row>
        <Row genre="Now Playing" fetchUrl={item_requests?.now_playing}></Row>
        <Row genre="Trending" fetchUrl={item_requests?.trending}></Row>
        <Row
          genre="Action Movies"
          fetchUrl={item_requests?.action_movies}
        ></Row>
        <Row
          genre="Romance Movies"
          fetchUrl={item_requests?.romance_movies}
        ></Row>
        <Row
          genre="Horror Movies"
          fetchUrl={item_requests?.horror_movies}
        ></Row>
        <Row
          genre="Comedy Movies"
          fetchUrl={item_requests?.comedy_movies}
        ></Row>
      </section>
    </div>
  );
};

export default Gallery;
