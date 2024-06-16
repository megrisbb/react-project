import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {MoviesPage} from "../pages/MoviesPage/MoviesPage";

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {path: 'movies', element: <MoviesPage/>},
        ]
    }
])

export {
    routerConfig
}