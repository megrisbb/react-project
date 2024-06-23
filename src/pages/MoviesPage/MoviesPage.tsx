import {MoviesList} from "../../components/MoviesList/MoviesList";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";

const MoviesPage = () => {

    return (
        <div>
        <MoviesList/>
        </div>
    );
};

export {MoviesPage};