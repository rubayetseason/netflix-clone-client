import React from 'react';

const Row = ({genre}) => {
    return (
        <div>
            <h1 className='text-xl md:text-2xl font-semibold'>{genre}</h1>
        </div>
    );
};

export default Row;