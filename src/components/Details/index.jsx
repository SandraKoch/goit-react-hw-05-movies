import PropTypes from 'prop-types';

const Details = ({ movie }) => {
  return (
    <div>
      {/* <img
        id={movie.id}
        src={`https://www.joyride.movie/"${movie.poster_path}`}
        alt={movie.title}
      /> */}
      <h2>{movie.title}</h2>
      <p>{movie.vote_average}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h4>Genres</h4>
      <div>
        {movie.genres.map(genre => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </div>
    </div>
  );
};

Details.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

export default Details;
