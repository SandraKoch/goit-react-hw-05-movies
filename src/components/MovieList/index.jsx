import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul className={css.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.movieElement}>
            <Link to={`/movies/${movie.id}`} className={css.movieLink}>
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
