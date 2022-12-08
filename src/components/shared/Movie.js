import React from 'react';
import './Row.css';

const Movie = ({rowMovie, handleMovie}) => {
    const {title, poster_path} = rowMovie;
    return (
         <img onClick={() => handleMovie(rowMovie)} className='movie_img max-h-[200px] md:max-h-[180px]' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} /> 
    );
};

export default Movie;