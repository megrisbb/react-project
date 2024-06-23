import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";


const MoviesList = () => {

    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(moviesActions.getAll())
    }, []);

    const { movies } = useAppSelector(state => state.moviesSlice);
    return (
        <div>
            {
                movies.map(movie => <MovieInfo key={movie.id} movie={movie} />)
            }
        </div>
    );
};

export {MoviesList};