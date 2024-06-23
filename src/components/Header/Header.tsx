import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.headerMainBlock}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="movies">Movies</NavLink>
        </div>
    );
};

export {Header};