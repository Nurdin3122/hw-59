
import React from 'react';
import MovieItem from "../MovieItem/MovieItem";
import {MovieListProps} from "../../type";
import "./movie-list.css";



const MovieList: React.FC<MovieListProps> = React.memo(({ movies, onEdit, onDelete }) => {
        return (
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        );
    }
);

export default MovieList;
