import {FC} from "react";
import {IMovie} from "../../interfaces/IMovie";

interface IProps{
    movie: IMovie
}

const MovieInfo:FC<IProps> = ({movie}) => {
    return (
        <div>
            {movie.id} - {movie.title}
        </div>
    );
};

export {MovieInfo};