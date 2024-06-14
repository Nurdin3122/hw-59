import {MovieItemProps} from "../../type";
import React from 'react';
import "./movie-item.css";




const MovieItem: React.FC<MovieItemProps> = React.memo(({ movie, onEdit, onDelete }) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            onEdit(movie.id, event.target.value);
        };

        console.log(`Rendering MovieItem: ${movie.id}`);
        return (
            <div className="movie-item">
                <input
                    type="text"
                    value={movie.name}
                    onChange={handleChange}
                    className="form-control"
                />
                <button onClick={() => onDelete(movie.id)}>Удалить</button>
            </div>
        );
    }
);

export default MovieItem;
