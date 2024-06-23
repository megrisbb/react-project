import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {routerConfig} from "./router/router";
import {Provider} from "react-redux";
import {store} from "./redux/store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={routerConfig}/>
    </Provider>
);



