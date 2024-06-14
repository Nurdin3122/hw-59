export interface Movie {
    name:string;
    id:number;
}

export interface MovieListProps {
    movies: Movie[];
    onEdit: (id: number, newName: string) => void;
    onDelete: (id: number) => void;
}

export  interface  MovieItemProps {
    movie: Movie;
    onEdit: (id: number, newName: string) => void;
    onDelete: (id: number) => void;
}

