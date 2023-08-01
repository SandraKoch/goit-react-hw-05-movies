import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api';
import Details from 'components/Details';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [previevedMovie, setPrevievedMovie] = useState(undefined);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieInfo = async id => {
      try {
        const apiResponse = await getMovieDetails(id);
        setPrevievedMovie(apiResponse);
        console.log('fetch', apiResponse);
      } catch (error) {
        console.log('fethMovieInfo', error);
      }
    };

    fetchMovieInfo(movieId);
  }, [movieId]);

  return (
    <div>
      <Link to={location?.state?.from ?? '/'}>
        <button type="button">Go back</button>
      </Link>

      {previevedMovie && <Details movie={previevedMovie} />}

      <nav className={css.navWrap}>
        <Link to="cast" className={css.navLink}>
          Cast
        </Link>
        <Link to="reviews" className={css.navLink}>
          Reviews
        </Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
