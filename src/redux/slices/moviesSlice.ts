import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/IMovie";
import {IGenre} from "../../interfaces/IGenre";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[];
    genres: IGenre[];
    totalPages: number;
    isLoading: boolean;
    error: string | null;
    currentPage: number;
    selectedMovie: IMovie | null;
    toggle: boolean
}

let initialState: IState = {
    movies: [],
    genres: [],
    totalPages: 100,
    isLoading: true,
    error: null,
    currentPage: 1,
    selectedMovie: null,
    toggle: false
}

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (_, thunkAPI) => {
                try {
                    const response = await movieService.getAll()
                    thunkAPI.dispatch(actions.changeLoadState(true))
                    return thunkAPI.fulfillWithValue(response.data);
                } catch (e) {
                    const error = e as AxiosError
                    return thunkAPI.rejectWithValue(error.response?.data)
                }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        changeLoadState:(state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled ,
                (state, action) => {
                state.movies = action.payload
            })

})

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions
}

export {
    moviesReducer,
    moviesActions,
    moviesSlice
}