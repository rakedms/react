import React from 'react';
import { useState ,useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './movieCard';

//e33a688e

const ApiURL = 'http://www.omdbapi.com?apikey=e33a688e'
const movie1 = {
    "Title": "Bigg Boss Tamil",
    "Year": "2017–",
    "imdbID": "tt7084920",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDQyNDdjYmEtMmU5Ny00NDkxLTkzYzgtZjlkMjdjNTMxMWJmXkEyXkFqcGdeQXVyMjYwMjMwMzk@._V1_SX300.jpg"
}

const App = () =>{
    const [movies, setmovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const SearchMovies = async(title) =>{
        const response = await(fetch(`${ApiURL}&s=${title}`))
        const data = await response.json();
        setmovies(data.Search);
    }
    
    useEffect(() => {
        SearchMovies('All Movies');
    },[])
    return(
        <div className = 'app'>
            <h1>Movie Searcher</h1>
             <div className = 'Search'>
                <input
                    placeholder='Search for'
                    value = {searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />
                <img
                    src = {SearchIcon}
                    alt='Search Icon'
                    onClick={(e) => {
                        SearchMovies(searchTerm);
                    }}
                />
             </div>
             <div className='List'>
                {movies.map((movie) =>
                    <MovieCard movie = {movie}/>
                )}
                
            </div>       

             <div className = "container">
                <MovieCard movie = {movie1}/>
             </div>

        </div>
    )
}

export default App;