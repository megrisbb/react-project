import {IMovie} from "../interfaces/IMovie";
import {apiService} from "./axiosService";
import {urls} from "../consts/urls";
import {IRes} from "../components/types/responceType";

const movieService = {
    getAll: (page: number = 1): IRes<IMovie[]> => apiService.get(urls.movies, { params: { page } })
};

export {
    movieService
}