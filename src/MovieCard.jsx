import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
        <div className="movie" >

            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}  alt={Title}/>
            </div>
            <div>
                    <span>
                        {Type}
                        <h3>{Title}</h3>
                    </span>
            </div>
        </div>
    );
};

export default MovieCard;