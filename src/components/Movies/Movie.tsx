
import React, { useState, useEffect } from 'react';
import MovieList from "../MovieList/MovieList";
import {Movie} from "../../type";


const Movies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([
        {name:'hello', id:1},
        {name:'hello', id:3},
        {name:'hello', id:2},
    ]);
    const [newMovie, setNewMovie] = useState<string>('');

    const addMovie = () => {
        if (newMovie.trim() === '') return;
        setMovies([...movies, { id: Math.random(), name: newMovie }]);
    };

    useEffect(() => {
        console.log('Movies updated:', movies);
    }, [movies]);

    const handleEditMovie = (id: number, newName: string) => {
        setMovies((prev) =>
            prev.map((movie) =>
                movie.id === id ? { ...movie, name: newName } : movie
            )
        );
    };

    const deleteMovie = (id: number) => {
        setMovies((prev) =>
            prev.filter((movie) => movie.id !== id)
        );
    };

    return (
        <div className="movie-tracker">
            <h1>Мои фильмы</h1>
            <div className="add-movie">
                <input
                    type="text"
                    value={newMovie}
                    onChange={(e) => setNewMovie(e.target.value)}
                    className="form-control"
                />
                <button onClick={addMovie}>Add</button>
            </div>
            <MovieList
                movies={movies}
                onEdit={handleEditMovie}
                onDelete={deleteMovie}
            />
        </div>
    );
};

export default Movies;
