import { NavLink } from 'react-router-dom';
import css from './Menu.module.css';

export const Menu = () => {
  return (
    <nav>
      <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={css.navLink} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};
