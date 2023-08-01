import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.movieElement}>
            <Link
              to={`/movies/${movie.id}`}
              className={css.movieLink}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
