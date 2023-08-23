import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";


function MovieList() {
    const [movies, setMovies] = useState(moviesDataJSON);
    const [moviesData, setMoviesData] = useState(moviesDataJSON);

    const filterMovieList = (str) => {
        let filteredMovies;
        console.log("STR IS THIS: ",str);

        if (str === "All") {
            filteredMovies = moviesData;
        } else {
            filteredMovies = moviesData.filter((movie) => {
                return movie.title[0].toLowerCase() === str.toLowerCase();
            });
        }
      
        setMovies(filteredMovies);
    };

    function createMovie(movieIWantToAdd) {
        // I want to add a new movie

        // Change the value of the state "movies"
        // To change the value I need a new array
        const newArray = [movieIWantToAdd, ...movies]
        const updatedMoviesData = [movieIWantToAdd, ...moviesData]

        // HEY COMPONENT, I'm passing you a new value so you need to update
        setMovies(newArray);
        setMoviesData(updatedMoviesData);
    }

    return (
        <div>
            <AddMovie createMovie={createMovie} />
            <FilterMovies filterMovieList={filterMovieList} />
            <h2>Movie List</h2>
            {movies.map(movie => {
                return <MovieCard key={movie._id} movie={movie} />;
            })}
        </div>
    );
}

export default MovieList;