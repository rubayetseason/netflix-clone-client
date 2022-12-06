import React from 'react';
import './Row.css';

const Movie = ({rowMovie}) => {

    const {title, poster_path} = rowMovie;
    return (
       <>
         <img className='movie_img max-h-[200px] md:max-h-[180px]' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
       </> 
    );
};

export default Movie;