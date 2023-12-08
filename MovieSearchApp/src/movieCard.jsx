import Reacr from 'react';
const MovieCard = ({movie}) =>{
    return(
        <div className = "Movie">
            <div>
                <p>{movie.Title}</p>
            </div>
            <div>
                <img
                  src={movie.Poster != 'NA' ? movie.Poster : 'https://via.placeholder.com/400'}
                  alt={movie.title}
                />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h1>{movie.Title}</h1>
            </div>
        </div>
        
    )
}    

export default MovieCard;


