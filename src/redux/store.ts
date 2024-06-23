import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer, moviesSlice} from "./slices/moviesSlice";


const store = configureStore({
    reducer: {
        moviesSlice: moviesSlice.reducer
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export {
    store
}

export type {
    RootState,
    AppDispatch
}